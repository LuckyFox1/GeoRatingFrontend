import { put, takeEvery, call, select } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { setMetcasts, setLike, removeLike } from '../actions'
import { BASE_URL } from '../../../constants'
import { getUser, getLike } from './selectors'

function * getMetcasts () {
  const resp = yield call(fetch, `${BASE_URL}/metcasts`, { method: 'GET' })
  const json = yield call([resp, 'json'])
  yield put(setMetcasts(json))
}

function * vote (action) {
  const user = yield select(getUser)
  const resp = yield call(fetch, `/like`, {
    method: 'POST',
    body: JSON.stringify({
      like: {
        isPositive: action.payload.rating,
        metcast_id: action.payload.metcastID,
        user_id: user._id
      } }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = yield call([resp, 'json'])
  /* const json = {
    like: {
      __v: 0,
      isPositive: 2,
      metcast_id: '5c0eecdfe74ec543a446eb18',
      user_id: '5c0eecfae74ec543a446eb1a',
      _id: '5c1fc86b74be522998479a7c'
    },
    newRating: '4.5'
  } */
  yield put(setLike(json.like, json.newRating))
  console.log(action.payload)
}

function * removeVote (action) {
  const like = yield select(getLike, action.payload.metcastID)
  console.log('del', like)
  console.log('del', action.payload)
  const resp = yield call(fetch, `/like/${like._id}/metcast/${action.payload.metcastID}`, {
    method: 'DELETE'
  })
  const json = yield call([resp, 'json'])
  /* const json = {
    message: 'Like removed!',
    newRating: '1.0'
  } */
  yield put(removeLike(action.payload.metcastID, json.newRating))
  // console.log(user._id)
}

export default function * home () {
  yield takeEvery(actionTypes.GET_METCASTS, getMetcasts)
  yield takeEvery(actionTypes.VOTE, vote)
  yield takeEvery(actionTypes.REMOVE_VOTE, removeVote)
}
