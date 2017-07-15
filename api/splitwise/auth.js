const client = require('./client')

const getRequestToken = () => {
  return new Promise((resolve, reject) => {
    client.getOAuthRequestToken((error, requestToken, requestTokenSecret, results) => {
      if (error) return reject(error)

      return resolve({
        requestToken,
        requestTokenSecret,
        results
      })
    })
  })
}

const getAuthorizationURL = requestToken =>
  `https://secure.splitwise.com/authorize?oauth_token=${requestToken}`

module.exports = {
  getAuthorizationURL,
  getRequestToken
}
