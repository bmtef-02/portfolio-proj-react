import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../shared/projects';


class FeaturedProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: PROJECTS
        }
    }

    render() {
        
        const featured = this.state.projects.filter(project => project.featured)

        return (
            <Container fluid className="featuredContainer">
                <Row>
                    <Col>
                        <h1 className="featuredHeader">Featured Projects</h1>
                    </Col>
                    <Col>
                        <a href="/search-results">Explore More Projects</a>
                    </Col>
                </Row>
                <Row>
                    <Col key={featured[0].id}>
                        <Link to={`/projects/${featured[0].id}`}>
                            <div>
                                <img 
                                    src="/assets/images/placeholder-img.jpg"
                                    className="featuredImg"
                                />
                            </div>
                            <div>
                                <h3>{featured[0].title}</h3>
                            </div>
                            <div>
                                <p>{featured[0].description}</p>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <div>
                            <img 
                                src="/assets/images/placeholder-img.jpg"
                                className="featuredImg"
                            />
                        </div>
                        <div>
                            <h3>{featured[1].title}</h3>
                        </div>
                        <div>
                            <p>{featured[1].description}</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img 
                                src="/assets/images/placeholder-img.jpg"
                                className="featuredImg"
                            />
                        </div>
                        <div>
                            <h3>{featured[2].title}</h3>
                        </div>
                        <div>
                            <p>{featured[2].description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FeaturedProjects;