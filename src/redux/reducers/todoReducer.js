import * as types from '../actions/types';

const initialState = {
  todos: [],
  todosChanged: false,
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

const deleteTodo = (state, action) => {
  return state.todos.filter((todo) => todo.id !== action.id);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS:
      return {...state, todos: state.todos};
    case types.CREATE_TODO:
      return {...state, todos: [action.todo, ...state.todos], todosChanged: true};
    case types.UPDATE_TODO:
      return {...state, todos: updateTodo(state, action), todosChanged: true};
    case types.DELETE_TODO:
      return {...state, todos: deleteTodo(state, action), todosChanged: true};
    case types.REMOVE_COMPLETED_TODOS:
      return {...state, todos: removeCompletedTodos(state), todosChanged: true};
    case types.UPDATE_VISIBILITY:
      return {...state, visibility: action.visibility, todosChanged: false};
    default:
      return state;
  }
}
