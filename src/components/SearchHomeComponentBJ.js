import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Badge, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class SearchHomeBJ extends Component {
    
    render() {

        const breakpoint = "\u003C\u002F\u003E"

        return(
            <React.Fragment>
                <Container className="searchContainer" fluid>
                    <Row className="searchRowTitle">
                        <Col className="mr-5">
                            <h1 className="searchHeaderTitle">What do you want to build?</h1>
                        <Form action="/search-results" method="get">
                            <div className="mb-3">
                                <Input 
                                    type="text" 
                                    placeholder="Search" 
                                    id="project-search" 
                                    name="s"
                                /> 
                            </div>
                            <div>
                                <Button color="primary" type="submit" block>Search</Button>
                            </div>
                        </Form>
                        </Col>
                        <Col className="ml-5">
                            <h1 className="searchHeaderTitle">Explore a topic</h1>
                            <Row className="searchRowPill">
                                <Col className="mb-3">
                                    <Link to='search-results?s=&c=automation'>
                                        <Badge className="searchPill" pill color="primary">Automation</Badge>
                                    </Link>
                                </Col>
                                <Col className="mb-3">
                                    <Link to='search-results?s=&c=crypto'>
                                        <Badge className="searchPill" pill color="primary">Crypto</Badge>
                                    </Link>
                                </Col>
                                <Col className="mb-3">
                                    <Link to='search-results?s=&c=data'>
                                        <Badge className="searchPill" pill color="primary">Data</Badge>
                                    </Link>
                                </Col>
                                <Col className="mb-3">
                                    <Link to='search-results?s=&c=game'>
                                        <Badge className="searchPill" pill color="primary">Game</Badge>
                                    </Link>
                                </Col>
                                <Col className="mb-3">
                                    <Link to='search-results?s=&c=web+design'>
                                        <Badge className="searchPill" pill color="primary">Web Design</Badge>
                                    </Link>
                                </Col>
                                <Col className="mb-3">
                                    <Link to='search-results?s=&c=Other'>
                                        <Badge className="searchPill" pill color="primary">Other</Badge>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="breakpoint">
                        <h1>{breakpoint}</h1>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default SearchHomeBJ