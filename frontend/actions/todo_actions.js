export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodos = (todos_array_from_backend) => {
    return {
        type: RECEIVE_TODOS,
        todos_array_from_backend,
    };
};

const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    }
};