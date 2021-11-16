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

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const addProject = project => ({
    type: ActionTypes.ADD_PROJECT,
    payload: project
});


export const postProject = (title, category, teamSize, description, languages, yearsOfExp, time, owner_id, team_id) => dispatch => {
    const teamSizeNum = parseInt(teamSize, 10)
    const newProject = {
        title,
        category,
        teamSize : teamSizeNum,
        description,
        languages: [languages],
        yearsOfExp,
        time,
        owner_id: 1,
        team_id: []
    };
    newProject.date = new Date().toISOString();

    return fetch(baseUrl + 'projects', {
        method: 'POST',
        body: JSON.stringify(newProject),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error(`Error  ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
            }
        },
        error => {throw error;}
    )
    .then(response => response.json())
    .then(response => dispatch(addProject(response)))
    .then(response => alert('Your project has been added') + JSON.stringify(response))
    .catch(error => {
        console.log('post project', error.message);
        alert('Your project could not be posted\nError: ' + error.message);
    });
};




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

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});