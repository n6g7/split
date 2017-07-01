const admin = require('firebase-admin')

function create (displayName) {
  return admin
    .database()
    .ref('users')
    .push({
      displayName
    })
}

function getByAccountId (accountId) {
  return new Promise((resolve, reject) => {
    admin
      .database()
      .ref('users')
      .orderByChild('accountId')
      .equalTo(accountId)
      .once('value', snap => {
        const error = new Error(`User not found (accountId='${accountId}')`)
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

module.exports = {
  create,
  getByAccountId
}
