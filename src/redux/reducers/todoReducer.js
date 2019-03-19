import * as types from '../actions/types';

const initialState = {
  todos: [],
  visibility: 'all'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS:
      return {...state, todos: action.todos};
    case types.UPDATE_VISIBILITY:
      return {...state, visibility: action.visibility};
    default:
      return state;
  }
}
