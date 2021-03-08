import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '/frontend/reducers/selectors';
import {receiveTodo, removeTodo, fetchTodos, createTodo } from '/frontend/actions/todo_actions';

function mapStateToProps(state) {
    return {
        todos: allTodos(state) 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        },
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        },
        fetchTodos: () => {
            return dispatch(fetchTodos());
        },
        createTodo: (todo) => {
            return dispatch(createTodo(todo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);