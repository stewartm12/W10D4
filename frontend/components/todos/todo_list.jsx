import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {
  debugger
  return (
    <div>
      <h1>Todos List</h1>
      <ul>
        {props.todos.map((todo) =>{
          return <TodoListItem key={todo.id} todo={todo}/>
        })}
      </ul>
    </div>
  )
}
export default TodoList;