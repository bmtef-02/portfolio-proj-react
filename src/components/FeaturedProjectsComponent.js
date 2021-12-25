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

        const breakpoint = "\u003C\u002F\u003E"
        
        const arrFeatured = this.state.projects.filter(project => project.featured);

        const featuredProject = arrFeatured.map(project => {
            return (
                <Col key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <div>
                            <img
                                src={project.img}
                                className="featuredImg"
                            />
                        </div>
                        <div>
                            <h5 className="featuredHeaderProj">{project.title}</h5>
                        </div>
                        <Row className="featuredRowLang">
                            {project.languages.map(language => {
                                return (
                                    <Col className="featuredColLang" xs="auto">
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
                <Row className="featuredRowTitle">
                    <Col>
                        <h1 className="featuredHeaderTitle">Featured Projects</h1>
                    </Col> 
                    <Col style={{textAlign: "right"}}>
                        <h5><a href="/search-results?s=">Explore More Projects</a></h5>
                    </Col>
                </Row>
                <Row className="featuredRowProj">
                    {featuredProject}
                </Row>
            </Container>
        );
    }
}

export default FeaturedProjects;