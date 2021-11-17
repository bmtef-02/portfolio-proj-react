import React, { Component } from 'react';
import { Button, Input, 
    Container, Row, Col, Form } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom'


class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const SearchBar = ({ searchQuery, setSearchQuery}) => {
            const history = useHistory();
            const onSubmit = e => {
                history.push(`?s=${searchQuery}`)
                e.preventDefault()
            }
        };

        return(
            <Container className={this.props.class}>
                <Form action="/" method="get" autoComplete="off" onSubmit={this.onSubmit}>
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
                </Form>
            </Container>
        );
    }
}

export default SearchBar;