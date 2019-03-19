import * as types from './types';

export const fetchTodos = () => dispatch => {
  const todos = window.todoStorage.fetch();

  dispatch({
    type: types.FETCH_TODOS,
    todos: todos,
  });
};

export const updateVisibility = (visibility) => dispatch => {
  dispatch({
    type: types.UPDATE_VISIBILITY,
    visibility,
  });
};


