import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col  } from 'reactstrap';
import SearchHome from './SearchHomeComponent';
// import SearchBar from './SearchBarComponent';
// import SearchFilter from './SearchFilterComponent';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom';
import JoinCreate from './JoinCreateComponent';
import FeaturedProjects from './FeaturedProjects';
import { Loading } from '../components/LoadingComponent'
import { baseUrl } from '../shared/baseUrl';
    
class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return(
            <React.Fragment>
                <Jumbotron className="home-jumbotron mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Ready to Collaborate?</h1>
                                <h2>Good.</h2>
                            </div>
                            <div classNam="col">
                                    <button>Get Started</button>
                                    <NavLink to="/search-results?s=&c=none">Search Results</NavLink>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <JoinCreate />
                <FeaturedProjects />
                <SearchHome />
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
    