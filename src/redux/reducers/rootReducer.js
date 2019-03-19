import {combineReducers} from 'redux'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  // another reducer
});

export default rootReducer;
