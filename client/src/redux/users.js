import * as ActionTypes from './ActionTypes';

export const Users = (state = { isLoading: true, errMess: null, users: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERS:
            return {...state, isLoading: false, errMess: null, users: action.payload};
        case ActionTypes.USERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}