import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = (props) => {
    // debugger
    return (
        <>
            <ul>
                {props.steps.map( step => {
                    return <StepListItemContainer key={step.id} step={step}/>
                })}
            </ul>
            <StepForm todo_id={props.todo_id} receiveStep={props.receiveStep}/>
        </>
    )
};

export default StepList;