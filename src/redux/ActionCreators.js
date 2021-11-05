import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchProjects = () => dispatch => {

    return fetch(baseUrl + "projects")
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)));
};

export const addProjects = projects => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
})

export const projectsFailed = errMess => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errMess
});

export const fetchUsers = () => dispatch => {

    return fetch(baseUrl + "users")
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(users=>dispatch(addUsers(users)))
    .catch(error => dispatch(usersFailed(error.message)));
};

export const addUsers = users => ({
    type: ActionTypes.ADD_USERS,
    payload: users
})

export const usersFailed = errMess => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});