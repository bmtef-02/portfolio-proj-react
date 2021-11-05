import * as ActionTypes from './ActionTypes';

export const Projects = (state = { isLoading: true, errMess: null, projects: [] }, action) => {
    switch (action.type) {
        case ActionTypes.PROJECTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}