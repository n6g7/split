const { auth } = require('./splitwise')

module.exports = (event, context, callback) => {
  auth.getAuthorizationURL()
  .then(authorizationURL => callback(
    null,
    {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        authorizationURL
      })
    }
  ))
}
