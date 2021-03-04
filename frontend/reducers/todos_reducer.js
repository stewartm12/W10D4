import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';


const todosReducer = (state = initialState, action) => { // action comes from dispatch
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_TODOS: 
            let futureState = {};
            action.todos.forEach(todo => {
                futureState[todo.id] = todo;
            })
            return futureState;

        case RECEIVE_TODO: 
            nextState[action.todo.id] = action.todo;
            return nextState;

        case REMOVE_TODO:
            futureState = {};
            for (const key in nextState) {
                if (key != action.todo.id) {
                    futureState[key] = nextState[key];
                }
            }
            return futureState;
            
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