import { put, takeEvery, call, select } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { setMetcasts, setLike, removeLike } from '../actions'
import { getUser, getLike } from './selectors'

function * getMetcasts () {
  try {
    const resp = yield call(fetch, `/metcasts`, { method: 'GET' })
    const json = yield call([resp, 'json'])
    yield put(setMetcasts(json))
  } catch (e) {
    console.log(e)
  }
}

function * vote (action) {
  try {
    const user = yield select(getUser)
    const resp = yield call(fetch, `/like`, {
      method: 'POST',
      body: JSON.stringify({
        like: {
          isPositive: action.payload.rating,
          metcast_id: action.payload.metcastID,
          user_id: user._id
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = yield call([resp, 'json'])
    yield put(setLike(json.like, json.newRating))
  } catch (e) {
    console.log(e)
  }
}

function * removeVote (action) {
  try {
    const like = yield select(getLike, action.payload.metcastID)
    const resp = yield call(fetch, `/like/${like._id}/metcast/${action.payload.metcastID}`, {
      method: 'DELETE'
    })
    const json = yield call([resp, 'json'])
    yield put(removeLike(action.payload.metcastID, json.newRating))
  } catch (e) {
    console.log(e)
  }
}

export default function * home () {
  yield takeEvery(actionTypes.GET_METCASTS, getMetcasts)
  yield takeEvery(actionTypes.VOTE, vote)
  yield takeEvery(actionTypes.REMOVE_VOTE, removeVote)
}
