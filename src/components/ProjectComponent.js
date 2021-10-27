import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';

function Project({project, users}) {
    const owner = users.filter(user=>project.owner_id === user.id)[0];
    const team_ids = project.team_id
    const team = [];
    for (let i=0; i<team_ids.length; i++) {
        for (let j=0; j<users.length; j++) {
            if (team_ids[i] === users[j].id) {
                team.push(users[j]);
            } 
        }
    }

        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>{project.title}</h2>
                            <Card>
                                <CardBody>
                                    <CardText>
                                        {project.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <CardTitle>Languages</CardTitle>
                                    <CardText>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">JavaScript</li>
                                            <li className="list-group-item">HTML</li>
                                            <li className="list-group-item">CSS</li>
                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <CardTitle>Years of Experience</CardTitle>
                                    <CardText>
                                        {project.experience}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <CardTitle>Weekly Time Commitment</CardTitle>
                                    <CardText>
                                        {project.time}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="shadow-sm text-center mt-md-5">
                                
                                <CardBody>
                                        <h3>Project Owner</h3>
                                        <img src={owner.user_img} class="img-fluid rounded-circle" width="200" alt="Project-Owner" />
                                        <h5 class="mt-3 card-title">{owner.name}</h5>
                                        <a href="#" class="text-decoration-none">@{owner.username}</a>
                                </CardBody>
                                
                            </Card>
                            <Card className="shadow-sm text-left mt-2">
                                <h3 className="text-center">Project Team</h3>
                                    <ProjectTeam team={team} />
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="d-inline align-middle project-member">
                                            <h5 class="d-inline">1.</h5>
                                            <a href="#" class="text-decoration-none">
                                                <img src="img/brian.png" width="30" class="img-fluid rounded-circle" alt="" />
                                                <span class="d-inline ml-1">Brian Jun</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-inline align-middle project-member">
                                            <h5 class="d-inline">2.</h5>
                                            <span class="d-inline"> Open</span>
                                            <button class="btn btn-success ml-2">Join Team</button>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-inline align-middle project-member">
                                            <h5 class="d-inline">3.</h5>
                                            <span class="d-inline"> Open</span>
                                            <button class="btn btn-success ml-2">Join Team</button>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
}

function ProjectTeam({team}) {
    const group = team.map(team => {
        return (
            <h1>{team.name}</h1>
        )
    })
        return (
            <h1>{group}</h1>
    )
    
//     
            
//         )
//     }) 
//     return(
//             {team_member}
//     )
}


export default Project