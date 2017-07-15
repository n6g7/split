const admin = require('firebase-admin')
const moment = require('moment')

function create (userId, data) {
  return admin
    .database()
    .ref(`transactions/${userId}`)
    .push(data)
}

function update (userId, transactionId, data) {
  return admin
    .database()
    .ref(`transactions/${userId}/${transactionId}`)
    .set(data)
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

function getById (userId, id) {
  return new Promise((resolve, reject) => {
    admin
      .database()
      .ref(`transactions/${userId}`)
      .orderByChild('id')
      .equalTo(id)
      .once('value', snap => {
        const error = new Error('Transaction not found')
        const result = snap.val()

        if (!result) return reject(error)

        const keys = Object.keys(result)

        return keys.length > 0
          ? resolve({
            key: keys[0],
            value: result[keys[0]]
          })
          : reject(error)
      })
  })
}

function createOrUpdate (userId, data) {
  const { id } = data

  return getById(userId, id)
  .then(
    ({ key }) => update(userId, key, data),
    () => create(userId, data)
  )
}

module.exports = {
  clean,
  create,
  createOrUpdate,
  delete: _delete,
  getById,
  update
}
