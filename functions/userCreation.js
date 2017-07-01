const functions = require('firebase-functions')

const { user } = require('./db')

module.exports = functions.auth.user().onCreate(event => {
  const { displayName } = event.data

  user.create(displayName)
})
