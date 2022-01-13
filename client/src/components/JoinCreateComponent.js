import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function JoinCreate() {

    const breakpoint = "\u003C\u002F\u003E"

    return (
        <Container className="joinCreateContainer" fluid>
            <h1 className="joinCreateHeader">How Meetup Works</h1>
            <h4 className="joinCreateDescrip">Meet new people who share your interests through online and in-person events. It’s free to create an account.</h4>
            <Row className="joinCreateRow">
                <Col className="joinCreateCol" xs="4">
                    <div>
                        <img
                            src="https://d2u0ncv6xpqn99.cloudfront.net/next/images/shared/handsUp.svg?w=384"
                            alt="Join a group"
                        />
                    </div>
                    <div>
                        <h5><a href="/search-results">Join a Project</a></h5>
                    </div>
                    <div>
                        <p className="joinCreatePara">
                            Do what you love, meet others who love it, find your community. The rest is history!
                        </p>
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
                        <h5><a href="/create-a-project">Create a Project</a></h5>
                    </div>
                    <div>
                        <p className="joinCreatePara">
                            You don’t have to be an expert to gather people together and explore shared interests.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="breakpoint">
                <h1>{breakpoint}</h1>
            </Row>
        </Container>
    )
}

export default JoinCreate;