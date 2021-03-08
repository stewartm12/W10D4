import configureStore from './store/store';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import {fetchTodos} from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootElement = document.getElementById("root");
  // debugger
  window.store = store;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store}/>, rootElement);
})