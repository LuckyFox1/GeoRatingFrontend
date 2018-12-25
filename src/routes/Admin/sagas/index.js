import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { BASE_URL } from '../../../constants'
import { setMetcastsToAdmin } from '../actions'

function * getMetcastsForAdmin () {
  const resp = yield call(fetch, `${BASE_URL}/metcasts`, { method: 'GET' })
  const json = yield call([resp, 'json'])
  yield put(setMetcastsToAdmin(json))
}

function * addMetcast (action) {
  console.log(action.payload)
}

export default function * admin () {
  yield takeEvery(actionTypes.GET_METCASTS_FOR_ADMIN, getMetcastsForAdmin)
  yield takeEvery(actionTypes.ADD_METCAST, addMetcast)
}
