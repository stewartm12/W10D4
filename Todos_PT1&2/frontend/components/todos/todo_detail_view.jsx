import React from 'react';
import StepListContainer from '../steps/step_list_container';
import { stepsByTodoId } from '/frontend/reducers/selectors';

function TodoDetailView({todo, removeTodo}) {
    return (
        <div>
            <StepListContainer todo_id={todo.id} steps={stepsByTodoId}/>
            <p>status: {todo.done ? 'Done' : 'Not Done'}</p>
            <p>{todo.body}</p>
            <button onClick={() => removeTodo(todo)}>Remove</button>
        </div>
    )
}

export default TodoDetailView;



