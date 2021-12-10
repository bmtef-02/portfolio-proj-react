import React, { Component } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../shared/projects';
import { style } from '@mui/system';


class FeaturedProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: PROJECTS
        }
    }

    render() {
        
        const arrFeatured = this.state.projects.filter(project => project.featured);

        const featuredProject = arrFeatured.map(project => {
            return (
                <Col key={project.id} className="mx-5">
                    <Link to={`/projects/${project.id}`}>
                        <div>
                            <img
                                src={project.img}
                                className="featuredImg"
                            />
                        </div>
                        <div>
                            <h4 className="featuredHeader">{project.title}</h4>
                        </div>
                        <Row className="featuredRow">
                            {project.languages.map(language => {
                                return (
                                    <Col className="featuredCol" xs="auto">
                                        <Badge pill>{language}</Badge>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Link>
                </Col>
            )
        });

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
                <Row className="mx-5">
                    {featuredProject}
                </Row>
            </Container>
        );
    }
}

export default FeaturedProjects;