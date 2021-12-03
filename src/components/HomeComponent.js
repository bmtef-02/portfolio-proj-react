import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col  } from 'reactstrap';
import SearchBar from './SearchBarComponent';
import SearchFilter from './SearchFilterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Loading } from '../components/LoadingComponent'
    
class Home extends Component {

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
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
    