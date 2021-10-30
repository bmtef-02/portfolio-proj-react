import React, { Component } from 'react';
import { Button, Input, 
    Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container className={this.props.class}>
                <Row className="mb-2">
                    <Col xs={this.props.colSpan}>
                        <Input type="text" placeholder="Search"/>     
                    </Col>
                    <Col>
                        <Link to="/search-results"><Button className="btn btn-primary">Search</Button></Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchBar;