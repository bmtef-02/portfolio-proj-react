import React, { Component } from 'react';
import Search from './SearchComponent';
import SearchBar from './SearchBarComponent';
import SearchFilter from './SearchFilterComponent';
import { Card, CardImg, CardText, CardBody, CardDeck, Breadcrumb, BreadcrumbItem, CardTitle, Col, Row, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

// This function returns each project and it's info as a Card
function SearchResultItem({project}) {
    
    // This function returns each languagae stored in each project object
    const projectLang = project.languages.map(project => {
        return (
            <React.Fragment key={project.id}>
                <Badge pill>{project}</Badge>{" "}
            </React.Fragment>
        )
    });

    return(
        <CardDeck className="mb-4">
            <Card className="scroll">
                <Link to={`/projects/${project.id}`}>
                    <CardImg variant="top" src="/assets/images/placeholder-img.jpg" />
                    <CardBody>
                        <CardTitle><h4>{project.title}</h4></CardTitle>
                        <CardText>{project.description}</CardText>
                        <div className="text-center">
                            {projectLang}   {/* Lists all languages the project requires */}
                            <Badge pill>{project.experience}</Badge>{" "}
                            <Badge pill>{project.time}</Badge>
                        </div>
                    </CardBody>
                </Link>
            </Card>
        </CardDeck>
    );
}

// This function renders the SearcBar, SearchFilter, and project Cards component
function SearchResult(props) {
    
    // This function maps through the PROJECTS array and passes each object to SearchResultItem
    const projects = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-3">
                <SearchResultItem project={project} />
            </div>
        )
    });

    return (
        <React.Fragment>
            <div>
                <SearchBar class="remove-margin" />
                <SearchFilter class="remove-margin" />
            </div>
            <div className="row">
                {projects}
            </div>
        </React.Fragment>
    );
}

export default SearchResult