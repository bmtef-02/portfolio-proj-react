import React, { Component } from 'react';
import Search from './SearchComponent';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, CardTitle, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function SearchResultItem({project}) {
    return(
        <Card className=".search-result p-2">
            <Link to={`/projects/${project.id}`}>
                <CardTitle>{project.title}</CardTitle>
            </Link>
            <CardBody>
                <CardText>{project.description}</CardText>
            </CardBody>
        </Card>
    );
}

function SearchResult(props) {
    const projects = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-3">
                <SearchResultItem project={project} />
            </div>
        )
    })
    return (
        <div className="container-fluid">
            <Search />
            <div className="row">
                    {projects}
            </div>
        </div>
    )

}

export default SearchResult