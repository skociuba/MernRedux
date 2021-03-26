import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from "../actions/taskActions"

 export const addTask = (name) => {
  
   return axios.post("http://localhost:5000/api/items", name).then(res => res.data)
}
  


function* addUsers({name}) {
   try {
      const users = yield call(addTask, name);
      yield put(actions.addPost(users));
      yield put({type: 'ADD_POST_SUCCES', name});
   } catch (e) {
      yield put({type: 'ADD_POST_FAILED', message: e.message});
   }
}

function* addSaga() {
   yield takeEvery('ADD_POST', addUsers);
}

export default addSaga;