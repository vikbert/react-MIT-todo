import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store/configureStore';

const STORAGE_KEY = 'REACT_APP_TODO_LIST';
window.todoStorage = {
  uid: 0,
  fetch: function () {
    try {
      const serializedState = localStorage.getItem(STORAGE_KEY);
      if (serializedState === null) {
        return undefined;
      }
      let todos = JSON.parse(serializedState);
      this.uid = todos.length;
      todos.forEach(function (todo, index) {
        todo.id = index;
      });

      return todos;
    } catch (err) {
      return undefined;
    }
  },
  save: function (todos) {
    try {
      const serializedTodos = JSON.stringify(todos);
      localStorage.setItem(STORAGE_KEY, serializedTodos);
    } catch {
      // ignore write errors
    }
  },
};

const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <App/>
  </ReduxProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
