import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl'

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
    const open_spots = project.teamSize - team.length;
    const unoccupied = [];
    if (open_spots > 0) {
        for (let i=0; i < open_spots; i++) {
            unoccupied.push('Open');
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
                                            <Languages lang={project.languages} />
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
                                        <img src={baseUrl +owner.user_img} class="img-fluid rounded-circle" width="200" alt="Project-Owner" />
                                        <h5 class="mt-3 card-title">{owner.name}</h5>
                                        <a href="#" class="text-decoration-none">@{owner.username}</a>
                                </CardBody>
                                
                            </Card>
                            <Card className="shadow-sm text-left mt-2">
                                <h3 className="text-center">Project Team (Spots: {project.teamSize})</h3>
                                <ul class="list-group list-group-flush">
                                    <ProjectTeam team={team} />
                                    <Open unoccupied={unoccupied} />
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
            <div>
                <li class="list-group-item">
                    <div class="d-inline align-middle project-member">
                        <a href="#" class="text-decoration-none">
                            <img src={baseUrl + team.user_img} width="30" class="img-fluid rounded-circle" alt="" />
                            <span class="d-inline ml-1">{team.name}</span>
                        </a>
                    </div>
                </li>
            </div>
        )
    })
        return (
            <div>
                {group}
            </div>
    )
}

function Open({unoccupied}) {
    const op = unoccupied.map((spot) =>
        <li class="list-group-item">
            <div class="d-inline align-middle project-member">
                <button class="btn btn-success ml-2">Join Team</button>
            </div>
        </li>
);

        return (
            <div>
                {op}
            </div>
        )
}

function Languages({lang}) {
    const la = lang.map((lang) =>
        <li className="list-group-item">{lang}</li>
);

    return (
        <div>
            {la}
        </div>
    )
}

export default Project