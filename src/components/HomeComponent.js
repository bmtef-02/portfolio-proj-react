import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
    

class Home extends Component {
    render() {
        return(
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Programmers Unite</h1>
                            <h2>Team Up.</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default Home;
    