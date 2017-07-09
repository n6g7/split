const fetch = require('node-fetch')

module.exports = (event, context, callback) => {
  fetch(process.env.TARGET_URL)
  .then(() => callback(
    null,
    'Done'
  ))
}
