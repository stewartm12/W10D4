import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STEPS:
            let futureState = {};
            action.steps.forEach(step => {
                futureState[step.id] = step;
            })
            return futureState;

        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;

        case REMOVE_STEP:
            futureState = {};
            for (const key in nextState) {
                if (key != action.step.id) {
                    futureState[key] = nextState[key];
                }
            }
            return futureState;

        default:
            return state;
    }
}

export default stepsReducer;