import * as types from '../actions/types';

const initialState = {
  todos: [],
  visibility: 'all',
};

const removeCompletedTodos = (state) => {
  return state.todos.filter(todo => todo.completed === false);
};

const updateTodo = (state, action) => {
  const todos = [...state.todos];
  todos[todos.indexOf(action.oldTodo)] = action.newTodo;

  return todos;
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS:
      return {...state, todos: action.todos};
    case types.CREATE_TODO:
      return {...state, todos: [action.todo, ...state.todos]};
    case types.UPDATE_TODO:
      return {...state, todos: updateTodo(state, action)};
    case types.REMOVE_COMPLETED_TODOS:
      return {...state, todos: removeCompletedTodos(state)};
    case types.UPDATE_VISIBILITY:
      return {...state, visibility: action.visibility};
    default:
      return state;
  }
}
