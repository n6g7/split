const Splitwise = {
  getRequestToken () {
    return window.fetch(process.env.SW_REQUEST_URL)
    .then(response => response.json())
  },

  getAccessToken (requestToken, requestTokenSecret, verifier) {
    return window.fetch(
      process.env.SW_ACCESS_URL,
      {
        body: JSON.stringify({
          requestToken,
          requestTokenSecret,
          verifier
        }),
        method: 'POST'
      }
    )
    .then(response => response.json())
  }
}

export default Splitwise
