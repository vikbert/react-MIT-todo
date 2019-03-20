import * as types from './types';

export const fetchTodos = () => dispatch => {
  dispatch({
    type: types.FETCH_TODOS,
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

export const deleteTodo = (id) => dispatch => {
  dispatch({
    type: types.DELETE_TODO,
    id: id
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


