import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();
  window.store = store;

  // root.innerHTML = '<h1>Todos App</h1>';
})