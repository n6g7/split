const admin = require('firebase-admin')

function create (userId, data) {
  return admin
    .database()
    .ref(`transactions/${userId}`)
    .push(data)
}

module.exports = {
  create
}
