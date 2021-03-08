import React from 'react';
import TodoDetailView from './todo_detail_view'

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: false,
    }
    this.handleView = this.handleView.bind(this);
  }
  
  handleView(e) {
    this.setState({
      detail: !this.state.detail,
    })
  }

  render() {
    const { todo, removeTodo, receiveTodo } = this.props;
    const flipped = Object.assign({}, todo, { done: !todo.done });
    return (
      <li>
        <div className="gettogetherdarnit">
          <h3 onClick={this.handleView}>{todo.title}</h3>
          <button onClick={() => receiveTodo(flipped)}>{todo.done ? "Undo" : "Done"}</button>
        </div>
        {this.state.detail ? <TodoDetailView todo={todo} removeTodo={removeTodo}/> : <></>}
      </li>
    )
  }
}


export default TodoListItem;

