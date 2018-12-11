import { all } from 'redux-saga/effects'
import home from '../routes/Home/sagas'

export default function * rootSaga () {
  yield all([
    home()
  ])
}
