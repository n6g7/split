const http = require('./http')
const { auth } = require('./splitwise')

module.exports.access = (event, context, callback) => {
  if (typeof event.body !== 'string') {
    return callback(null, http.fail('No token provided'))
  }

  const { requestToken, requestTokenSecret, verifier } = JSON.parse(event.body)

  if (!requestToken || !requestTokenSecret || !verifier) {
    return callback(null, http.fail('Missing data'))
  }

  auth.getAccessToken(requestToken, requestTokenSecret, verifier)
  .then(({ accessToken, accessTokenSecret }) => callback(
    null,
    http.success({
      accessToken,
      accessTokenSecret
    })
  ))
  .catch(() => callback(
    null,
    http.fail('Invalid token')
  ))
}

module.exports.request = (event, context, callback) => {
  auth.getRequestToken()
  .then(({ requestToken, requestTokenSecret }) => callback(
    null,
    http.success({
      authorizationURL: auth.getAuthorizationURL(requestToken),
      requestToken,
      requestTokenSecret
    })
  ))
}
