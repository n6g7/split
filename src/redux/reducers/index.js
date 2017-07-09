import { combineReducers } from 'redux'
import transactions from './transactions'
import user from './user'

export default combineReducers({
  transactions,
  user
})
