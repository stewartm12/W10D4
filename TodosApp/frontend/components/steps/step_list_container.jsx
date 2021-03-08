import { connect } from 'react-redux';
import StepList from './step_list';
import { receiveStep } from '/frontend/actions/step_actions';

function mapStateToProps (state, ownProps) {
    // debugger
    return {
        steps: ownProps.steps(state, ownProps.todo_id),
        todo_id: ownProps.todo_id,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        receiveStep: (step) => {
            return dispatch(receiveStep(step))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList);