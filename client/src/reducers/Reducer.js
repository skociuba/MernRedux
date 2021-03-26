import * as type from "../actions/Types";


const addTodo = (state, newTodo) => {
  const { name } = newTodo;
  const todo = name;
  const newState = {...state, todo};
  console.log(newState)
  return newState;
};
const editTodo = (state, updateTodo) => {

  const newState ={users: state.users.map(todo => {
    if (todo._id === updateTodo.id) {
      return {
        _id: todo.id,
        name: updateTodo.name,
        
      };
    }
    return todo;
  })}
  return newState;
};

const initialState = {users:[]};
export default function titles (state = initialState, action) {
  switch (action.type) {
   
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }

      case type.ADD_POST:
        return addTodo(state, action);
  
       case type.REMOVE_POST:
         return{users: state.users.filter(item => item._id !== action.id)};
  
      case type.RESET_POST:
        return initialState;
  
      case type.CHANGE_POST:
        return editTodo(state, action);
  
      case type.TOGGLE_TODO:
        return{users: state.users.map(todo =>
          todo._id === action.id
            ? { ...todo, switch: !todo.switch, id: todo._id }
            : todo
        )};
      case type.TOGGLE_FILTER:
        return state.filter(item =>
          item.id !== action.id ? { body: item.body } : "nie znaleziono"
        );
      case type.SWITCH_POST:
        return{users: state.users.map(todo =>
          todo._id === action.id
            ? { ...todo, switc: !todo.switc }
            : todo
        )};
    default:
      return state
  }
}
