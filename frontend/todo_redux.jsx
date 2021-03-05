import configureStore from './store/store';
// import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
// import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootElement);
})