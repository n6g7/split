import { types } from '@actions/transactions'

const initialState = {
  list: []
}

export default function transactionsReducer (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_TRANSACTIONS:
      return {
        ...state,
        list: action.transactions
      }
    default:
      return state
  }
}
