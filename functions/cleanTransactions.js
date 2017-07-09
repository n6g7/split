const functions = require('firebase-functions')

const { transaction } = require('./db')

module.exports = functions.https.onRequest((req, res) => {
  transaction.clean()
  .then(() => res.status(200).send('Done'))
  .catch(error => {
    console.error(error)
    res.status(500).send('Something bad happened')
  })
})
