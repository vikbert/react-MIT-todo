import {createStore} from 'redux';
import configureEnhancer from '../containers/configureEnhancer'

export default function configureStore() {
  const initialState = {};
  const enhancer = configureEnhancer();
  const rootReducer = input => input;

  return createStore(rootReducer, initialState, enhancer);
}
