import * as types from '../actions/types';

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS:
      return {...state, todos: action.todos};
    default:
      return state;
  }
}
