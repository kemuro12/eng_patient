import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import usersReducer from './user-reducer';
import appReducer from './app-reducer';

const reducers = combineReducers({
    app: appReducer,
    user: usersReducer,
    auth: authReducer
});

const rootReducer = (state, action) => {
    if(action.type === 'auth/LOGOUT') {
        state = {
            app :{
                isInitialized: true
            }
        };
    }

    return reducers(state, action);
}

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;