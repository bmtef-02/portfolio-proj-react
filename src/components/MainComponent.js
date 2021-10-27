import React, { Component } from 'react';
import HeaderConditional from './HeaderConditionalComponent';
import Home from './HomeComponent';
import SearchResult from './SearchResultComponent';
import Project from './ProjectComponent';
import Search from './SearchComponent';
import Footer from './FooterComponent';
import Create from './CreateComponent';
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
                console.log(match)
            return(
                <Project 
                project={this.state.projects.filter(project => project.id === +match.params.projectId)[0]}
                users={this.state.users}
                />
                
            )
        }
        return(
            <div>
                <HeaderConditional />
                <Switch>
                    <Route exact path='/' render={() =>
                        <div>
                            <Home />
                            <Search />
                        </div>
                        } />
                    <Route exact path='/home' render={() =>
                        <div>
                            <Home />
                            <Search />
                        </div>
                        } />
                    <Route path='/search-results' render={() => <SearchResult projects={this.state.projects} />} />
                    <Route path='/projects/:projectId' component={ProjectWithId} />
                    <Route path='/create-a-project' component={Create} />
                </Switch>
                <Footer />
            </div>

        
        );



    };

}

export default Main