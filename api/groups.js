const http = require('./http')
const { groups } = require('./splitwise')

module.exports.list = (event, context, callback) => {
  if (typeof event.body !== 'string') {
    return callback(null, http.fail('No token provided'))
  }

  const { accessToken, accessTokenSecret } = JSON.parse(event.body)

  if (!accessToken || !accessTokenSecret) {
    return callback(null, http.fail('Missing data'))
  }

  groups.list(accessToken, accessTokenSecret)
  .then(groups => callback(
    null,
    http.success(groups)
  ))
  .catch(() => callback(
    null,
    http.fail('Invalid token')
  ))
}
