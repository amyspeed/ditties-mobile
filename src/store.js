import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from './async-storage';
import authReducer from './reducers/auth';
import dittiesReducer from './reducers/ditties';
import { setAuthToken, refreshAuthToken } from './actions/authActions';

const store = createStore(
    combineReducers({
        auth: authReducer,
        ditties: dittiesReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;