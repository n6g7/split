const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

exports.cleanTransactions = require('./cleanTransactions')
exports.userCreation = require('./userCreation')
exports.webhook = require('./webhook')
