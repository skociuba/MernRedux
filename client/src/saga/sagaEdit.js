import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from "../actions/taskActions"

 export const editTask = (id, name) => {
  
    return axios.patch("http://localhost:5000/api/items/"+id, name, { headers:{
      
   
    'Content-Type': 'application/json'
  }})
          .then(res => res.data)
           .catch((err)=>{
             console.log(err)
})
}


function* editUsers({id ,name}) {
   try {
      const users = yield call(editTask, id, name);
     
      yield put(actions.changePost(users));
      yield put({type: 'CHANGE_POST_SUCCES', id, name});
   } catch (e) {
      yield put({type: 'CHANGE_POST_FAILED',id, message: e.message});
   }
}

function* editSaga() {
   yield takeEvery('CHANGE_POST', editUsers);
}

export default editSaga;