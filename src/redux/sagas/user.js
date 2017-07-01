import { call, fork, put, take, takeEvery } from 'redux-saga/effects'

import rsf, { authProvider } from '../rsf'

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser
} from '@actions/user'

function * loginSaga () {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider)
    yield put(loginSuccess())
  } catch (error) {
    yield put(loginFailure(error))
  }
}

function * logoutSaga () {
  try {
    yield call(rsf.auth.signOut)
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

function * syncUserSaga () {
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) yield put(syncUser(user))
    else yield put(syncUser(null))
  }
}

export default function * instancesSaga () {
  yield takeEvery(types.LOGIN.REQUEST, loginSaga)
  yield takeEvery(types.LOGOUT.REQUEST, logoutSaga)
  yield fork(syncUserSaga)
}
