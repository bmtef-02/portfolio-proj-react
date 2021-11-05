import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Projects } from './projects';
import { Users } from './users';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            users: Users
        }),
        applyMiddware(thunk, logger)
    );

    return store;
}