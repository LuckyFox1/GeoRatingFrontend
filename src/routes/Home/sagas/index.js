import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { setMetcasts } from '../actions'
import { BASE_URL } from '../../../constants'

function * getMetcasts () {
  const resp = yield call(fetch, `${BASE_URL}/metcasts`, { method: 'GET' })
  const json = yield call([resp, 'json'])
  yield put(setMetcasts(json))
}

export default function * home () {
  yield takeEvery(actionTypes.GET_METCASTS, getMetcasts)
}
