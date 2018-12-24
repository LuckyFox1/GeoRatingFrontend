import { all } from 'redux-saga/effects'
import home from '../routes/Home/sagas'
import admin from '../routes/Admin/sagas'

export default function * rootSaga () {
  yield all([
    home(),
    admin()
  ])
}
