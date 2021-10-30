import React, { Component } from 'react';
import { Jumbotron,
    Container, Row, Col,
    Navbar, Nav, NavItem, NavbarToggler, Collapse  } from 'reactstrap';
import SearchBar from './SearchBarComponent';
import SearchFilter from './SearchFilterComponent';
    

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    // This function will toggle isNavOpen to the opposite of it's value when called
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid className="mb-0">
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

export default Home;
    