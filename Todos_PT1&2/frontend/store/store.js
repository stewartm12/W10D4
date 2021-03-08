import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => {

    let store;
    if (localStorage.getItem("stateOfStore")) {
        store = createStore(rootReducer, 
            JSON.parse(localStorage.getItem("stateOfStore"))
            );
    } else {
        store = createStore(rootReducer);
    }

    store.subscribe(()=>{
        localStorage.setItem("stateOfStore", 
        JSON.stringify(store.getState())
        )
    });

    return store;
};

export default configureStore;