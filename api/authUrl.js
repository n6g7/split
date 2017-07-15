const { auth } = require('./splitwise')

module.exports = (event, context, callback) => {
  auth.getRequestToken()
  .then(({ requestToken, requestTokenSecret }) => callback(
    null,
    {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        authorizationURL: auth.getAuthorizationURL(requestToken),
        requestToken,
        requestTokenSecret
      })
    }
  ))
}
