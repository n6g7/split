export const types = {
  AUTHORIZE: 'AUTHORIZE',
  SET_TOKEN: 'SET_TOKEN'
}

export const authorize = () => ({
  type: types.AUTHORIZE
})

export const setToken = (accessToken, accessTokenSecret) => ({
  type: types.SET_TOKEN,
  accessToken,
  accessTokenSecret
})
