const http = require('./http')
const { auth } = require('./splitwise')

module.exports = (event, context, callback) => {
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
