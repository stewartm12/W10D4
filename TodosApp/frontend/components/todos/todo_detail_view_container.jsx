import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '/frontend/actions/todo_actions';
import { receiveSteps } from '/frontend/actions/step_actions';

function mapDispatchToProps(dispatch) {
    return {
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        },
        receiveSteps: (todo) => {
            return dispatch(receiveSteps)
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView);