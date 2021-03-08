export function allTodos(state) {
    return Object.values(state.todos);
}

export function stepsByTodoId(state, todoId) {
    return Object.values(state.steps).filter(step => step.todo_id === todoId);
}