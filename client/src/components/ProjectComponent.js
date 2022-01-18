import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from '../components/LoadingComponent';
import { joinTeam } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
    joinTeam: (projectId, userId) => (joinTeam(projectId, userId))
}

class Project extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() { 
        if(this.props.isLoadingProjects || this.props.isLoadingUsers ) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        const owner = this.props.users.filter(user=>this.props.project.owner_id === user.id)[0];
        const team_ids = this.props.project.team_id
        const team = [];
            for (let i=0; i<team_ids.length; i++) {
                for (let j=0; j<this.props.users.length; j++) {
                    if (team_ids[i] === this.props.users[j].id) {
                        team.push(this.props.users[j]);
                    } 
                }
            }
        const open_spots = this.props.project.teamSize - team.length;
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
                            <h2>{this.props.project.title}</h2>
                            <Card>
                                <CardBody>
                                    <CardText>
                                        {this.props.project.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <CardTitle>Languages</CardTitle>
                                    <CardText>
                                        <ul className="list-group list-group-flush">
                                            <Languages lang={this.props.project.languages} />
                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <CardTitle>Years of Experience</CardTitle>
                                    <CardText>
                                        {this.props.project.yearsOfExp}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody>
                                    <CardTitle>Weekly Time Commitment</CardTitle>
                                    <CardText>
                                        {this.props.project.time}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="shadow-sm text-center mt-md-5">
                                <CardBody>
                                        <h3>Project Owner</h3>
                                        <img src={baseUrl + owner.user_img} class="img-fluid rounded-circle" width="200" alt="Project-Owner" />
                                        <h5 class="mt-3 card-title">{owner.name}</h5>
                                        <a href="#" class="text-decoration-none">@{owner.username}</a>
                                </CardBody>
                                
                            </Card>
                            <Card className="shadow-sm text-left mt-2">
                                <h3 className="text-center">Project Team (Spots: {this.props.project.teamSize})</h3>
                                <ul class="list-group list-group-flush">
                                    <ProjectTeam team={team} />
                                    <Open unoccupied={unoccupied} project_id={this.props.project.id} joinTeam={this.props.joinTeam} team={this.props.project.team_id}/>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

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

function Open({unoccupied, project_id, joinTeam, team}) {
    console.log('Team passed into Open from props: ' + team);
    const testClick = () => {
        console.log('Starting fetch');
        return fetch('https://localhost:3443/projects/61e63e90d306381820c95ffe/joinTeam', {
            method: 'PUT',
            body: JSON.stringify({
                "user": "61e65243d1e19739680f295c"
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
        .then(response => {
            console.log(response);
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            })
        .then(response => {
            response.json();
            alert("You've been added to the project!")
        })
        .catch(error => alert(error))
    }

    const op = unoccupied.map(() =>
        <li class="list-group-item">
            <div class="d-inline align-middle project-member">
                <button onClick={testClick} class="btn btn-success ml-2">Join Team</button>
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


export default withRouter(connect(null, mapDispatchToProps)(Project));