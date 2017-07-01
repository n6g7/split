const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

exports.userCreation = require('./userCreation')
exports.webhook = require('./webhook')
