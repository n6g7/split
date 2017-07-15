import { types } from '@actions/splitwise'

const initialState = {
  accessToken: null,
  accessTokenSecret: null
}

export default function splitwiseReducer (state = initialState, action) {
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken || state.accessToken,
        accessTokenSecret: action.accessTokenSecret || state.accessTokenSecret
      }
    default:
      return state
  }
}
