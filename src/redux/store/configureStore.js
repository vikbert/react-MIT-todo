import {createStore} from 'redux';
import configureEnhancer from '../containers/configureEnhancer';
import rootReducer from '../reducers/index';

export default function configureStore() {
  const enhancer = configureEnhancer();
  const initialState = {
    todoApp: {
      todos: window.todoStorage.fetch() || [],
      todosChanged: false,
      visibility: 'all',
    },
  };

  const store = createStore(rootReducer, initialState, enhancer);
  store.subscribe(() => {
    let todoApp = store.getState().todoApp;
    if (todoApp.todosChanged) {
      window.todoStorage.save(todoApp.todos);
    }
  });

  return store;
}
