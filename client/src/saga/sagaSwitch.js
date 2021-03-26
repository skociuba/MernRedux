import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from "../actions/taskActions"

 export const switchTask = (id, switc) => {
  
    return axios.put(`http://localhost:5000/api/items/${id}`, switc , { headers:{
      
   
    'Content-Type': 'application/json'
  }})
          .then(res => res.data)
           .catch((err)=>{
             console.log(err)
})
}


function* switchUsers({id ,switc}) {
   try {
      const users = yield call(switchTask, id, switc);
     
      yield put(actions.switchPost(users));
      yield put({type: 'SWITCH_POST_SUCCES', id, switc});
   } catch (e) {
      yield put({type: 'SWITCH_POST_FAILED',id, message: e.message});
   }
}

function* switchSaga() {
   yield takeEvery('SWITCH_POST', switchUsers);
}

export default switchSaga;