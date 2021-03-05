import React from 'react';

function TodoListItem({todo}) {
  // debugger
  return (
    <li>
      <h3>{todo.title}</h3>
      <p>status: {todo.done ? 'Done' : 'Not Done'}</p>
      <p>{todo.body}</p>
    </li>
  )
}


export default TodoListItem;