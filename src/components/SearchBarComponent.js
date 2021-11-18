import React, { Component } from 'react';
import { Button, Input, 
    Container, Row, Col, Form, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const SearchBar = ({ searchQuery, setSearchQuery}) => {
        //     const history = useHistory();
        //     const onSubmit = e => {
        //         history.push(`?s=${searchQuery}`)
        //         e.preventDefault()
        //     }
        // };

        return(
            <Container className={this.props.class}>
                <Form action="/search-results" method="get">
                    <Row className="mb-2">
                        <Col xs={this.props.colSpan}>
                            <Input 
                                type="text" 
                                placeholder="Search" 
                                id="project-search" 
                                name="s"/>     
                        </Col>
                        <Col>
                            <Button type="submit" className="btn btn-primary">Search</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Label htmlFor="category">Category</Label>
                            <Input 
                                type="select" 
                                name="c" 
                                id="projCategory">
                                <option value="automation">Automation</option>
                                <option value="crypto">Crypto</option>
                                <option value="data">Data</option>
                                <option value="game">Game</option>
                                <option value="web design">Web Design</option>
                                <option value="other">Other</option>
                            </Input>
                        </Col>
                        <Col className="mb-4">
                                <Label htmlFor="languages">Languages</Label>
                                <Input type="select" name="l" id="languages" multiple>
                                    <option value="1">HTML</option>
                                    <option value="2">CSS</option>
                                    <option value="3">JS</option>
                                    <option value="4">Python</option>
                                    <option value="5">C</option>
                                    <option value="6">C#</option>
                                    <option value="6">C++</option>
                                </Input>
                        </Col>
                    </Row>
                    
                </Form>
            </Container>
        );
    }
}

export default SearchBar;