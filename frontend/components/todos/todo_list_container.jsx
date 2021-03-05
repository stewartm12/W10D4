import {connect} from 'react-redux';
import TodoList from './todo_list';
import allTodos from '/frontend/reducers/selectors';
import {receiveTodo} from '/frontend/actions/todo_actions';

function mapStateToProps(state) {
    return {
        todos: allTodos(state) 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);