import {
  TOGGLE_TODO,
  ADD_POST,
  REMOVE_POST,
  CHANGE_POST,
  RESET_POST,
  TOGGLE_FILTER,
  SWITCH_POST
} from "./Types";
export const addPost = name => ({
  type: ADD_POST,
 name
 
});

export const removePost = id => ({
  type: REMOVE_POST,
  id
});
export const changePost = item => ({
  type: CHANGE_POST,

  id: item.id,
  name: item.name,
});
export const resetPost = item => ({
  type: RESET_POST,
  item
});
export const toggleTodo = (id, completed) => ({
  type: TOGGLE_TODO,
  id,
  completed
});
export const toggleFilter = item => ({
  type: TOGGLE_FILTER,
  id: item.id,
  body: item.body
});
export const switchPost = (id, switc) => ({
  type: SWITCH_POST,
  id,
  switc
});
