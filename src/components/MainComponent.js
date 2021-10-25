import React, { Component } from 'react';
import Header from './HeaderComponent'
import HeaderNoLogin from './HeaderNoLoginComponent';
import SearchResult from './SearchResultComponent';
import Project from './ProjectComponent';
import Search from './SearchComponent';
import Footer from './FooterComponent';
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
                <HeaderNoLogin />
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route path='/home' component={Search}/>
                    <Route path='/search-results' render={() => <SearchResult projects={this.state.projects} />} />
                    <Route path='/projects/:projectId' component={ProjectWithId} />
                </Switch>
                <Footer />
            </div>

        
        );



    };

}

export default Main