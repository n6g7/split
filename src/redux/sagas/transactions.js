import { fork, select, takeLatest } from 'redux-saga/effects'

import rsf from '../rsf'

import { syncTransactions } from '@actions/transactions'
import { types } from '@actions/user'

const transactionsTransformer = obj =>
  Object.keys(obj).map(key => ({
    ...obj[key],
    key
  }))

function * syncTransactionsSaga () {
  const uid = yield select(state => state.user.user.uid)
  return yield fork(
    rsf.database.sync,
    `transactions/${uid}`,
    syncTransactions,
    transactionsTransformer
  )
}

export default function * instancesSaga () {
  yield takeLatest(types.SYNC_USER, syncTransactionsSaga)
}
