import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import {thunk} from '../middleware/thunk';
// import thunk from 'redux-thunk';

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer,
            preLoadedState,
            applyMiddleware(thunk)
    );
};

export default configureStore;