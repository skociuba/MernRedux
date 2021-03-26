import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function getApi() {
   return axios.get("http://localhost:5000/api/items")
   .then(res => res.data)
}

function* fetchUsers() {
   try {
      const users = yield call(getApi);
      yield put({type: 'GET_USERS_SUCCESS', users: users});//call is calling the function ,put is broadcasting (rozgłasza) action
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
} 

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;
