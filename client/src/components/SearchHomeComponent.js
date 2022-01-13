import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Badge, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class SearchHome extends Component {
    
    render() {
        return(
            <React.Fragment>
                <Container className={this.props.class}>
                <Form action="/search-results" method="get">
                    <Row>
                        <h2>What do you want to build?</h2>
                    </Row>
                    <Row className="mb-2"> 
                        <Col xs={this.props.colSpan}>
                            <Input 
                                type="text" 
                                placeholder="Search" 
                                id="project-search" 
                                name="s"/>     
                        </Col>
                        <Col>
                            <Link to='search-results?s=&c=automation'><Badge pill bg="primary">Automation</Badge></Link>
                            <Link to='search-results?s=&c=crypto'><Badge pill bg="primary">Crypto</Badge></Link>
                            <Link to='search-results?s=&c=data'><Badge pill bg="primary">Data</Badge></Link>
                            <Link to='search-results?s=&c=game'><Badge pill bg="primary">Game</Badge></Link>
                            <Link to='search-results?s=&c=web+design'><Badge pill bg="primary">Web Design</Badge></Link>
                            <Link to='search-results?s=&c=Other'><Badge pill bg="primary">Other</Badge></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button type="submit" className="btn btn-primary">Search</Button>
                        </Col>
                    </Row>
                </Form>
                </Container>

            </React.Fragment>
        )
    }
}

export default SearchHome