import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga/rootSaga'
import rootReducer from './reducers/index'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk, logger];

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(sagaMiddleware, ...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)

export default store
