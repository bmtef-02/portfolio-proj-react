import React, { Component } from 'react';
import Header from './HeaderComponent'
import SearchResult from './SearchResultComponent';
import Project from './ProjectComponent'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PROJECTS } from '../shared/projects';
import { USERS } from '../shared/users'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
            users: USERS
        };
    }

    render() {
        const ProjectWithId = ({match}) => {

            return(
                <Project 
                project={this.state.projects.filter(project => project.id === +match.params.projectId)[0]}
                />
                
            )
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/search-results' render={() => <SearchResult projects={this.state.projects} />} />
                    <Route path='/projects/:projectId' component={ProjectWithId} />
                </Switch>
                
            </div>

        
        );



    };

}

export default Main