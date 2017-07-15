const client = require('./client')

module.exports = {
  list: client.getHandler('https://secure.splitwise.com/api/v3.0/get_groups')
}
