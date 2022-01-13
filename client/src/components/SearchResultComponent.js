import React, { Component, useState, useEffect } from 'react';
import SearchBar from './SearchBarComponent';
import SearchFilter from './SearchFilterComponent';
import { Card, CardImg, CardText, CardBody, CardDeck, Breadcrumb, BreadcrumbItem, CardTitle, Col, Row, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent'

// This function returns each project and it's info as a Card
function SearchResultItem({project}) {

    let truncateDescription = "";

    if (project.description.length > 150) {
        truncateDescription = project.description.substring(0, 200) + "...";
    } else {
        truncateDescription = project.description;
    }

    return(
        <Col>
            <Link to={`/projects/${project.id}`}>
                <div>
                    <img
                        src="/assets/images/placeholder-img.jpg"
                        className="featuredImg"
                    />
                </div>
                <div>
                    <h5 className="featuredHeaderProj">{project.title}</h5>
                </div>
                <div>
                    <p>{truncateDescription}</p>
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
    );
}

// This function renders the SearcBar, SearchFilter, and project Cards component
function SearchResult(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    console.log('search query:' + query)
    let cat = new URLSearchParams(search).get('c');
    console.log('category dropdown: ' + cat)
    const filterProjects = (projects, query, cat) => {
        if (!query && (cat === 'none' || cat === null)) {
            return projects;
        }
        else if (query && (cat === 'none' || cat === null)) {
            return projects.filter((project) => {
                console.log(project.title)
                const projectTitle = project.title.toLowerCase();
                const projectDescription = project.description.toLowerCase();
                console.log('from projects array: ' + project.category)
                return (projectTitle.includes(query) || projectDescription.includes(query)) 
            })
        }
        else if (!query) {
            return projects.filter((project) => {
                console.log(project.title)
                const projectCategory = project.category.toLowerCase();
                console.log('projectCategory variable: ' + projectCategory)
                console.log('from projects array: ' + project.category)
                return projectCategory.includes(cat);
            })
        }
    
        return projects.filter((project) => {
            console.log(project.title)
            const projectTitle = project.title.toLowerCase();
            const projectDescription = project.description.toLowerCase();
            const projectCategory = project.category.toLowerCase();
            console.log('Project Title: ' + project.title)
            console.log('Project Category: ' + project.category)
            return projectCategory.includes(cat) && (projectTitle.includes(query) || projectDescription.includes(query)) 
        });
    };

    console.log("Here are the projects as props: " + props.projects)
    const filteredProjects = filterProjects(props.projects, query, cat);
    console.log(filteredProjects)

    // This function maps through the PROJECTS array and passes each object to SearchResultItem
    const projects = filteredProjects.map(project => {
        return (
            <div key={project.id} className="col-xl-3 col-md-4 col-6">
                <SearchResultItem project={project} />
            </div>
        )
    });

    if(props.projectsLoading) {
        return( 
        <>
            <SearchBar class="remove-margin" />
            {/* <SearchFilter class="remove-margin" /> */}
            <Loading />
        </>
        )
    }

    if (filteredProjects.length < 1) {
        return(
            <>
            <SearchBar />
            <p>Oops! No projects match your search criteria. Try broadening your search.</p>
            </>
        )
    }

    return (
        <React.Fragment>
            <div>
                <SearchBar class="remove-margin" />
            </div>
            <div className="row" style={{backgroundColor: "white"}}>
                {projects}
            </div>
        </React.Fragment>
    );
}

export default SearchResult