import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from "../actions/taskActions"

 export const removeTask = (id) => {
  
   return axios.delete("http://localhost:5000/api/items/"+id)
          .then(res => res.data)
}
  


function* delateUsers({id}) {
   try {
      const users = yield call(removeTask, id);
      yield put(actions.removePost(users));
      yield put({type: 'REMOVE_POST_SUCCES', id});
   } catch (e) {
      yield put({type: 'REMOVE_POST_FAILED', message: e.message});
   }
}

function* removeSaga() {
   yield takeEvery('REMOVE_POST', delateUsers);
}

export default removeSaga;