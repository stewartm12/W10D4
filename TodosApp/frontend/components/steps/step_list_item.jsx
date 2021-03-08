import React from 'react';

function StepListItem(props) {
    // debugger
    const { step, removeStep, receiveStep } = props;
    const flipped = Object.assign({}, step, { done: !step.done });
    return (
        <>
            <h5>{props.step.title}: {props.step.done ? "done" : "not done"}</h5>
            <p>{props.step.body}</p>
            <button onClick={() => receiveStep(flipped)}>{step.done ? "Undo" : "Done"}</button>
            <button onClick={() => removeStep(step)}>Remove</button>
        </>
    )
}

export default StepListItem;