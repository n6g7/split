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

const getAccessToken = (requestToken, requestTokenSecret, verifier) => {
  return new Promise((resolve, reject) => {
    client.getOAuthAccessToken(
      requestToken, requestTokenSecret, verifier,
      (error, accessToken, accessTokenSecret, results) => {
        if (error) return reject(error)

        return resolve({
          accessToken,
          accessTokenSecret,
          results
        })
      }
    )
  })
}

const getAuthorizationURL = requestToken =>
  `https://secure.splitwise.com/authorize?oauth_token=${requestToken}`

module.exports = {
  getAccessToken,
  getAuthorizationURL,
  getRequestToken
}
