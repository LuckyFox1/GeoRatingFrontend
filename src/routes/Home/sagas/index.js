import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import {isLoggedIn, setMetcasts} from '../actions'
import { BASE_URL } from '../../../constants'

function * getMetcasts () {
  const resp = yield call(fetch, `/metcasts`, { method: 'GET' })
  const json = yield call([resp, 'json'])
  yield put(setMetcasts(json))
}

function * login (action) {
  yield console.log(action)
  /*const resp = yield call(fetch, `/login`, {
    method: 'POST',
    body: JSON.stringify({ user: { name: action.payload.name, password: action.payload.password } }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = yield call([resp, 'json'])
  yield console.log(json)
  yield put(setUser(json.user))*/
  yield put(isLoggedIn(true))
  // yield put(setMetcasts(json))
}

function * register (action) {
  yield console.log(action)
  /*const resp = yield call(fetch, `/register`, {
    method: 'POST',
    body: JSON.stringify({ user: { name: action.payload.name, password: action.payload.password } }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = yield call([resp, 'json'])
  yield console.log(json)
  yield put(setUser(json.user))*/
}

export default function * home () {
  yield takeEvery(actionTypes.GET_METCASTS, getMetcasts)
  yield takeEvery(actionTypes.LOGIN_USER, login)
  yield takeEvery(actionTypes.REGISTER_USER, register)
}
