import React, { Component } from 'react';
import Search from './SearchComponent';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function SearchResult(props) {

    const projects = props.projects.map(project => {
        return (
                <div key={project.id}>
                    <Card>
                        <Link to={`/projects/${project.id}`}>
                            <CardTitle>{project.title}</CardTitle>
                        </Link>
                        <CardBody>
                            <CardText>{project.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
        )
    })
    return (
        <div>
            <Search />
            {projects}
        </div>
    )

}



export default SearchResult