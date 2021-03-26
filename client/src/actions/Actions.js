import{
   GET_USERS_REQUESTED 
 
} from "./Types";

export function getUsers() {
  return { 
    type: GET_USERS_REQUESTED
 
  }
}
