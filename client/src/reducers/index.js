import { combineReducers } from "redux";
import users from "./Reducer";

const rootReducer =  combineReducers({
  users: users,

});

export default rootReducer
