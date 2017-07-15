const OAuth = require('oauth')

const client = new OAuth.OAuth(
  'https://secure.splitwise.com/api/v3.0/get_request_token',
  'https://secure.splitwise.com/api/v3.0/get_access_token',
  process.env.CONSUMER_KEY,
  process.env.SECRET_KEY,
  '1.0',
  process.env.CALLBACK_URL,
  'HMAC-SHA1'
)

module.exports = client
