import { all } from 'redux-saga/effects'
import userSaga from './saga'
import addSaga from './sagaCreate'
import removeSaga from './sagaRemove'
import editSaga from './sagaEdit'
import switchSaga from './sagaSwitch'
export  function* rootSaga() {
  yield all([
    userSaga(),
     addSaga(),
     removeSaga(),
     editSaga(),
     switchSaga()
  ])
}
