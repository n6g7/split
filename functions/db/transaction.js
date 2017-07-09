const admin = require('firebase-admin')
const moment = require('moment')

function create (userId, data) {
  return admin
    .database()
    .ref(`transactions/${userId}`)
    .push(data)
}

function _delete (userId, transactionId) {
  return admin
    .database()
    .ref(`transactions/${userId}/${transactionId}`)
    .remove()
}

function clean () {
  const limit = moment().subtract(5, 'days')

  return admin
    .database()
    .ref('transactions')
    .once('value')
    .then(snapshot => {
      const transactions = snapshot.val()
      const promises = []

      Object.keys(transactions).forEach(userId => {
        const userTransactions = transactions[userId]

        Object.keys(userTransactions).forEach(transactionId => {
          const transaction = userTransactions[transactionId]
          const created = moment(transaction.created)

          if (created.isBefore(limit)) {
            promises.push(_delete(userId, transactionId))
          }
        })
      })

      return Promise.all(promises)
    })
}

module.exports = {
  clean,
  create,
  delete: _delete
}
