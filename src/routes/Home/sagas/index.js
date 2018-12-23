import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { isLoggedIn, setMetcasts } from '../actions'
import { BASE_URL } from '../../../constants'

function * getMetcasts () {
  const resp = yield call(fetch, `${BASE_URL}/metcasts`, { method: 'GET' })
  const json = yield call([resp, 'json'])
  yield put(setMetcasts(json))
}

function * login (action) {
  yield console.log(action)
  yield put(isLoggedIn(true))
}

function * register (action) {
  yield console.log(action)
}

export default function * home () {
  yield takeEvery(actionTypes.GET_METCASTS, getMetcasts)
  yield takeEvery(actionTypes.LOGIN_USER, login)
  yield takeEvery(actionTypes.REGISTER_USER, register)
}
