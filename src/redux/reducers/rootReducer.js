import {combineReducers} from 'redux'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  todoPage: todoReducer,
  // another reducer
});

export default rootReducer;
