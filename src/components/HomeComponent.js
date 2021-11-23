import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import SearchBar from './SearchBarComponent';
import SearchFilter from './SearchFilterComponent';
import { withRouter } from 'react-router-dom';
    

class Home extends Component {

    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid className="mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Programmers Unite</h1>
                                <h2>Team Up.</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="center">
                    <SearchBar colSpan="10" />
                    <SearchFilter />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
    