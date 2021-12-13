import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col,
    Button } from 'reactstrap';
import SearchHome from './SearchHomeComponent';
// import SearchBar from './SearchBarComponent';
// import SearchFilter from './SearchFilterComponent';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom';
import JoinCreate from './JoinCreateComponent';
import FeaturedProjects from './FeaturedProjectsComponent';
import SearchHomeBJ from './SearchHomeComponentBJ';
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

        const breakpoint = "\u003C\u002F\u003E"

        return(
            <React.Fragment>
                {/* <Jumbotron className="home-jumbotron mb-5 jumboTest">
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
                </Jumbotron> */}
                <Container className="jumboContainer" fluid>
                    <Row className="jumboRow">
                        <Col xs="4">
                            <h1 className="jumboHeader1">Ready to Collaborate?</h1>
                            <h2 className="jumboHeader2">Good.</h2>
                        </Col>
                        <Col className="jumboCol">
                            <Button color="primary">Get Started</Button>
                        </Col>
                    </Row>
                    <Row className="breakpoint">
                        <h1>{breakpoint}</h1>
                    </Row>
                </Container>
                <JoinCreate />
                {/* <SearchHome /> */}
                <SearchHomeBJ />
                <FeaturedProjects />
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
    