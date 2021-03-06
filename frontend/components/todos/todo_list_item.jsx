import React from 'react';

function TodoListItem({todo, removeTodo, receiveTodo}) {
  // debugger
  const flipped = Object.assign({}, todo, {done: !todo.done});
  return(
      <li>
        <h3>{todo.title}</h3>
        <button onClick={() => removeTodo(todo)}>Remove Todo</button>
        <button onClick={() => receiveTodo(flipped)}>{todo.done ? "Undo" : "Done"}</button>
        <p>status: {todo.done ? 'Done' : 'Not Done'}</p>
        <p>{todo.body}</p>
      </li>
    )
}


export default TodoListItem;