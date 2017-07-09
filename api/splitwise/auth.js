const client = require('./client')

const getRequestToken = () => {
  return new Promise((resolve, reject) => {
    client.getOAuthRequestToken((error, oauthToken, oauthTokenSecret, results) => {
      if (error) return reject(error)

      return resolve({
        oauthToken,
        oauthTokenSecret,
        results
      })
    })
  })
}

const getAuthorizationURL = () => {
  return getRequestToken()
  .then(({ oauthToken }) =>
    `https://secure.splitwise.com/authorize?oauth_token=${oauthToken}`
  )
}

module.exports = {
  getAuthorizationURL,
  getRequestToken
}
