import {createStore} from 'redux';

export default function configureStore() {
  const initialState = {};
  const enhancer = input => input;
  const rootReducer = input => input;

  return createStore(rootReducer, initialState, enhancer);
}
