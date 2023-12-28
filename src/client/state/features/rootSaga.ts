import { all, fork } from 'redux-saga/effects'
import CounterWatcherSaga from './counter/saga'

function* rootSaga() {
  yield all([fork(CounterWatcherSaga)])
}

export default rootSaga