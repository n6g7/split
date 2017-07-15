import { call, fork, select, take, takeEvery } from 'redux-saga/effects'

import rsf from '../rsf'

import { types } from '@actions/splitwise'
import { types as userTypes } from '@actions/user'
import Splitwise from '@services/splitwise'

function * authorizeSaga () {
  const {
    authorizationURL,
    requestToken,
    requestTokenSecret
  } = yield call(Splitwise.getRequestToken)

  const uid = yield select(state => state.user.user.uid)

  // Save token + secret in firebase
  yield call(rsf.database.patch, `/users/${uid}`, {
    requestToken,
    requestTokenSecret
  })

  // Redirect to ask authorization
  window.location.href = authorizationURL
}

function * finaliseSaga () {
  if (window.location.pathname !== '/sw/callback') return

  const url = new window.URL(window.location)
  const verifier = url.searchParams.get('oauth_verifier')

  const { user } = yield take(userTypes.SYNC_USER)
  const {
    requestToken,
    requestTokenSecret
  } = yield call(rsf.database.read, `users/${user.uid}`)

  const {
    accessToken,
    accessTokenSecret
  } = yield call(
    Splitwise.getAccessToken,
    requestToken,
    requestTokenSecret,
    verifier
  )

  yield call(rsf.database.patch, `/users/${user.uid}`, {
    accessToken,
    accessTokenSecret
  })
}

export default function * splitwiseSaga () {
  yield takeEvery(types.AUTHORIZE, authorizeSaga)
  yield fork(finaliseSaga)
}
