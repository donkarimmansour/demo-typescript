import { delay, put, throttle } from 'redux-saga/effects'
import { decrement, decrementByAmount, increment, incrementByAmount, newAction, reset } from './slice'

// Worker Sagas
function* WorkerSaga() {
    yield delay(1000)
    yield put(newAction())
}

    
// Watcher Saga
function* WatcherSaga() {
  yield throttle(2000, increment.type, WorkerSaga)

  
  yield throttle(2000, decrement.type, WorkerSaga)
  yield throttle(2000, incrementByAmount.type, WorkerSaga)
  yield throttle(2000, decrementByAmount.type, WorkerSaga)
  yield throttle(2000, reset.type, WorkerSaga)
}

export default WatcherSaga
