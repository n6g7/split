import { combineReducers } from 'redux'
import splitwise from './splitwise'
import transactions from './transactions'
import user from './user'

export default combineReducers({
  splitwise,
  transactions,
  user
})
