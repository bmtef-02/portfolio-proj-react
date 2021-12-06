import { blue, red } from '@mui/material/colors';
import React from 'react';
import { Container, Row, Col, 
            Card, CardBody, CardText, CardLink } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function JoinCreate() {
    return (
        <Container className="joinCreateContainer" fluid>
            <h1 className="joinCreateHeader">How Meetup Works</h1>
            <p className="joinCreateParagraph">Meet new people who share your interests through online and in-person events. It’s free to create an account.</p>
            <Row className="joinCreateRow">
                <Col className="joinCreateCol" xs="4">
                    <div>
                        <img
                            src="https://d2u0ncv6xpqn99.cloudfront.net/next/images/shared/handsUp.svg?w=384"
                            alt="Join a group"
                        />
                    </div>
                    <div>
                        <a href="/search-results">Join a Project</a>
                    </div>
                    <div>
                        <p>Do what you love, meet others who love it, find your community. The rest is history!</p>
                    </div>
                </Col>
                <Col className="joinCreateCol" xs="4">
                    <div>
                        <img
                            src="https://d2u0ncv6xpqn99.cloudfront.net/next/images/shared/joinGroup.svg?w=384"
                            alt="Start a group"
                        />
                    </div>
                    <div>
                        <a href="/create-a-project">Create a Project</a>
                    </div>
                    <div>
                        <p>You don’t have to be an expert to gather people together and explore shared interests.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default JoinCreate;