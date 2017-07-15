module.exports = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },

  success (data, statusCode = 200) {
    return {
      statusCode,
      headers: Object.assign(
        {},
        this.headers,
        {
          'Content-type': 'application/json'
        }
      ),
      body: JSON.stringify(data)
    }
  },

  fail (message, statusCode = 400) {
    return {
      statusCode,
      headers: Object.assign(
        {},
        this.headers,
        {
          'Content-type': 'text/plain'
        }
      ),
      body: message
    }
  }
}
