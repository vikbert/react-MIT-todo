import * as types from './types';

export const fetchTodos = () => dispatch => {
  const todos = window.todoStorage.fetch();

  dispatch({
    type: types.FETCH_TODOS,
    todos: todos,
  });
};

export const createTodo = (todo) => dispatch => {
  dispatch({
    type: types.CREATE_TODO,
    todo: todo,
  });
};

export const updateTodo = (newTodo, oldTodo) => dispatch => {
  dispatch({
    type: types.UPDATE_TODO,
    newTodo: newTodo,
    oldTodo: oldTodo,
  });
};

export const removeCompletedTodos = () => dispatch => {
  dispatch({
    type: types.REMOVE_COMPLETED_TODOS,
  });
};


export const updateVisibility = (visibility) => dispatch => {
  dispatch({
    type: types.UPDATE_VISIBILITY,
    visibility,
  });
};


