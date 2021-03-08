import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import {removeStep, receiveStep} from '/frontend/actions/step_actions';

function mapDispatchToProps(dispatch) {
    return {
        removeStep: (step) => {
            return dispatch(removeStep(step))
        },
        receiveStep: (step) => {
            return dispatch(receiveStep(step))
        }
    }
}

export default connect(null, mapDispatchToProps)(StepListItem);