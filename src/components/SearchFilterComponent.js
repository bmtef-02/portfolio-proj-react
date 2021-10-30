import React, { Component } from 'react';
import { Input, Label, 
    Container, Row, Col,
    Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom'

class SearchFilter extends Component {
    
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
            <Navbar light expand="lg">
                <Container className={this.props.class}>
                    <Row className="mb-4 search-filters">
                        <NavbarToggler onClick={this.toggleNav} className="search-filter-toggler" />
                        <Collapse isOpen={this.state.isNavOpen} navbar className="test">
                            <Col className="mb-4">
                                <Label htmlFor="projCategory">Project Category</Label>
                                <Input type="select" name="projCategory" id="projCategory">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Input>
                            </Col>
                            <Col className="mb-4">
                                <Label htmlFor="languages">Languages</Label>
                                <Input type="select" name="languages" id="languages" multiple>
                                    <option value="1">HTML</option>
                                    <option value="2">CSS</option>
                                    <option value="3">JS</option>
                                    <option value="4">Python</option>
                                    <option value="5">C</option>
                                    <option value="6">C#</option>
                                    <option value="6">C++</option>
                                </Input>
                            </Col>
                            <Col className="mb-4">
                                <Label htmlFor="yearsOfExp">Years of Exp</Label>
                                <Input type="select" name="yearsOfExp" id="yearsOfExp">
                                    <option value="1">&lt;1 year</option>
                                    <option value="2">1-3 years</option>
                                    <option value="3">3-5 years</option>
                                    <option value="4">5-10 years</option>
                                    <option value="5">10+ years</option>
                                </Input>
                            </Col>
                            <Col>
                                <Label htmlFor="timeCommit">Weekly Time Commit</Label>
                                <Input type="select" name="timeCommit" id="timeCommit">
                                    <option value="1">&lt;5 hours</option>
                                    <option value="2">5-10 hours</option>
                                    <option value="3">10-20 hours</option>
                                    <option value="4">20-40 hours</option>
                                    <option value="5">40+ hours</option>
                                </Input>
                            </Col>
                        </Collapse>
                    </Row>
                </Container>  
            </Navbar>
        );
    }
}

export default SearchFilter;