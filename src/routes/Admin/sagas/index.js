import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { setMetcastsToAdmin, setMetcast, changeMetcast, removeMetcast } from '../actions'

function * getMetcastsForAdmin () {
  try {
    const resp = yield call(fetch, `/metcasts`, {method: 'GET'})
    const json = yield call([resp, 'json'])
    yield put(setMetcastsToAdmin(json))
  } catch (e) {
    console.log(e)
  }
}

function * addMetcast (action) {
  try {
    const resp = yield call(fetch, `/metcasts`, {
      method: 'POST',
      body: JSON.stringify({metcast: action.payload.metcast}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = yield call([resp, 'json'])
    yield put(setMetcast(json.metcast))
  } catch (e) {
    console.log(e)
  }
}

function * editMetcast (action) {
  try {
    const resp = yield call(fetch, `/${action.payload.metcastID}`, {
      method: 'PUT',
      body: JSON.stringify({metcast: action.payload.metcast}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = yield call([resp, 'json'])
    yield put(changeMetcast(json.metcast))
  } catch (e) {
    console.log(e)
  }
}

function * remove (action) {
  try {
    const resp = yield call(fetch, `/${action.payload.metcastID}`, {
      method: 'DELETE'
    })
    const json = yield call([resp, 'json'])
    console.log(json)
    yield put(removeMetcast(action.payload.metcastID))
  } catch (e) {
    console.log(e)
  }
}

export default function * admin () {
  yield takeEvery(actionTypes.GET_METCASTS_FOR_ADMIN, getMetcastsForAdmin)
  yield takeEvery(actionTypes.ADD_METCAST, addMetcast)
  yield takeEvery(actionTypes.EDIT_METCAST, editMetcast)
  yield takeEvery(actionTypes.REMOVE, remove)
}
