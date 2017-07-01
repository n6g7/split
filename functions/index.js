const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)

const { transaction, user } = require('./db')

exports.webhook = functions.https.onRequest((req, res) => {
  const { type, data } = req.body

  switch (type) {
    case 'transaction.created':
      user.getByAccountId(data.account_id)
        .then(snapshot => transaction.create(snapshot.key, data))
        .then(() => res.status(200).send())
        .catch(() => res.status(404).send('Unknown account_id'))
      break
    default:
      res.status(400).send('Unknown type')
      break
  }
})
