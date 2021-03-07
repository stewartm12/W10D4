import configureStore from './store/store';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootElement = document.getElementById("root");

  ReactDOM.render(<Root store={store}/>, rootElement);
})