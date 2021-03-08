import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
  // debugger\
  render() {
    const {todos, removeTodo, receiveTodo, createTodo} = this.props;
    return (
      <div>
        <h1>Todos List</h1>
        <ul>
          {todos.map((todo) => {
            return <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo} />;
          })}
        </ul>
        <TodoForm receiveTodo={receiveTodo} createTodo={createTodo}/>
      </div>
    );
  }
}
export default TodoList;