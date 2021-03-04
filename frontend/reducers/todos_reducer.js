import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';


const todosReducer = (state = initialState, action) => { // action comes from dispatch
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    debugger
    switch (action.type) {
        case RECEIVE_TODOS: 
            let futureState = {};
            for (let key in action.todos) {
                key = parseInt(key);
                futureState[key+1] = action.todos[key];
            }
            return futureState;
        case RECEIVE_TODO: 
            nextState[action.todo.id] = action.todo;
            return nextState;
        default:
            return state;
    }
};

export default todosReducer;

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};