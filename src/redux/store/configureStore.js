import {createStore} from 'redux';
import configureEnhancer from '../containers/configureEnhancer'
import rootReducer from '../reducers/rootReducer'

export default function configureStore() {
  const initialState = {};
  const enhancer = configureEnhancer();

  return createStore(rootReducer, initialState, enhancer);
}
