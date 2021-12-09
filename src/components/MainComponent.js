import React, { Component } from 'react';
import HeaderConditional from './HeaderConditionalComponent';
import Home from './HomeComponent';
import SearchResult from './SearchResultComponent';
import Project from './ProjectComponent';
import Search from './SearchComponent';
import Footer from './FooterComponent';
import Create from './CreateComponent';
// import Create from './CreateComponentMUI';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// import { PROJECTS } from '../shared/projects';
// import { USERS } from '../shared/users'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchProjects, fetchUsers, postProject } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        projects: state.projects,
        users: state.users
    };
};

const mapDispatchToProps = {
    fetchProjects: () => (fetchProjects()),
    fetchUsers: () => (fetchUsers()),
    postProject: (title, category, teamSize, description, languages, yearsOfExp, time, owner_id, team_id) => (postProject(title, category, teamSize, description, languages, yearsOfExp, time, owner_id, team_id))
};

class Main extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     projects: PROJECTS,
        //     users: USERS
        // };
    }

    componentDidMount() {
        this.props.fetchProjects();
        this.props.fetchUsers();
    }

    render() {
        const ProjectWithId = ({match}) => {
            return(
                <Project 
                project={this.props.projects.projects.filter(project => project.id === +match.params.projectId)[0]}
                users={this.props.users.users}
                isLoadingProjects={this.props.projects.isLoading}
                isLoadingUsers={this.props.users.isLoading}
                />
                
            )
        }
        return(
            <React.Fragment>
                <HeaderConditional />
                <Switch>
                    <Route exact path='/' render={() =>
                            <Home 
                                projects={this.props.projects}
                                projectsLoading={this.props.projects.isLoading}
                            />
                        } />
                    <Route exact path='/home' render={() =>
                            <Home 
                                projects={this.props.projects}
                                projectsLoading={this.props.projects.isLoading}
                            />
                        } />
                    <Route path='/search-results' render={() => <SearchResult projects={this.props.projects.projects} projectsLoading={this.props.projects.isLoading} />} />
                    <Route path='/projects/:projectId' component={ProjectWithId} />
                    <Route path='/create-a-project' render={() => <Create postProject={this.props.postProject} />} />
                </Switch>
                <Footer />
            </React.Fragment>

        
        );



    };

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));