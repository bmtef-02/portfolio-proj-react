import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList} from 'react-web-tabs';
import { Control, LocalForm, Errors } from 'react-redux-form';
import "react-web-tabs/dist/react-web-tabs.css";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            category: null,
            teamSize: null,
            description: null,
            languages: null, 
            yearsOfExp: null,
            time: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectedMultiple = this.handleSelectedMultiple.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name)
        const value = event.target.value;
        this.setState({
          ...this.state,
          [event.target.name]: value
        });
    }

    handleSelectedMultiple = evt => {
        const values = Array.from(evt.target.selectedOptions, option => option.value);
        // Or this way
       // const values = [...evt.target.selectedOptions].map(opt => opt.value)
        console.log('values', values);
        this.setState({languages: values});
      };

    handleSubmit(event) {
        
        this.props.postProject(
            this.state.title,
            this.state.category,
            this.state.teamSize,
            this.state.description,
            this.state.languages,
            this.state.yearsOfExp,
            this.state.time
        );
        event.preventDefault();
    }

    render() {

        return(
            <div>
                <h1>What Are We Building?</h1>
                <div className="container">
                    <Tabs defaultTab="vertical-tab-one" vertical>
                            <TabList>
                                <Tab tabFor="vertical-tab-name"><i className="fa fa-pencil" aria-hidden="true"></i> Name</Tab>
                                <Tab tabFor="vertical-tab-category"><i class="fa fa-th" aria-hidden="true"></i> Category</Tab>
                                <Tab tabFor="vertical-tab-description"><i class="fa fa-align-justify" aria-hidden="true"></i> Description</Tab>
                                <Tab tabFor="vertical-tab-languages"><i class="fa fa-code" aria-hidden="true"></i> Languages</Tab>
                                <Tab tabFor="vertical-tab-teamSize"><i class="fa fa-users" aria-hidden="true"></i> Team Size</Tab>
                                <Tab tabFor="vertical-tab-experience"><i class="fa fa-black-tie" aria-hidden="true"></i> Experience</Tab>
                                <Tab tabFor="vertical-tab-time"><i class="fa fa-clock-o" aria-hidden="true"></i> Weekly Time Commitment</Tab>
                                <Tab tabFor="vertical-tab-submit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Review and Submit</Tab>
                            </TabList>
                        <form onSubmit={this.handleSubmit}>
                            <TabPanel tabId="vertical-tab-name">
                                <h2>Name</h2>
                                <p>Use a short and simple name for your project. Don't worry you'll have more room to describe your project in the Description section.</p>
                                <Input type="text" name="title" id="title" onChange={this.handleChange}/>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-category">
                                <h2>Category</h2>
                                <p>What category does your project best fit into? If you can't find one that matches your project, choose "Other"</p>
                                <Input type="select" name="category" id="category" onChange={this.handleChange} >
                                    <option hidden value="">--</option>
                                    <option value="Automation">Automation</option>
                                    <option value="Crypto">Crypto</option>
                                    <option value="Data">Data</option>
                                    <option value="Game">Game</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Other">Other</option>
                                </Input>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-description">
                                <h2>Description</h2>
                                <p>Here's where you can spill all the beans on what your master plan is. Give a thorough explanation of what you're trying to build and the expections of what you need from your team. Spare no detail!</p>
                                <Input type="textarea" name="description" id="description" onChange={this.handleChange}/>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-languages">
                                <h2>Languages</h2>
                                <p>Finely tune your team by picking the languages you're envisioning your project to be build with. Choose as many as you'd like.</p>
                                <Input type="select" name="languages" id="languages" onChange={this.handleSelectedMultiple} multiple>
                                                <option value="HTML">HTML</option>
                                                <option value="CSS">CSS</option>
                                                <option value="JS">JS</option>
                                                <option value="Python">Python</option>
                                                <option value="C">C</option>
                                                <option value="C#">C#</option>
                                                <option value="C++">C++</option>
                                </Input>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-teamSize">
                                <h2>Team Size</h2>
                                <p>This one's pretty simple. How many team members do you need?</p>
                                <Input type="number" name="teamSize" id="teamSize" onChange={this.handleChange}/>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-experience">
                                <h2>Experience</h2>
                                <p>Some projects are harder than others. How many years of experience should your team members have?</p>
                                <Input type="select" name="yearsOfExp" id="yearsOfExp" onChange={this.handleChange} >
                                            <option hidden value="">--</option>
                                            <option value="&lt;1 year">&lt;1 year</option>
                                            <option value="1-3 years">1-3 years</option>
                                            <option value="3-5 years">3-5 years</option>
                                            <option value="5-10 years">5-10 years</option>
                                            <option value="10+ years">10+ years</option>
                                        </Input>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-time">
                                <h2>Weekly Time Commitment</h2>
                                <p>Setting expectations on time commitment is important from the start. How many hours a week should your team be spending on your project?</p>
                                <Input type="select" name="time" id="time" onChange={this.handleChange} >
                                    <option hidden value="">--</option>
                                    <option value="5-10 hours">5-10 hours</option>
                                    <option value="10-20 hours">10-20 hours</option>
                                    <option value="20-40 hours">20-40 hours</option>
                                    <option value="40+ hours">40+ hours</option>
                                </Input>
                            </TabPanel>
                        </form>
                    </Tabs>
                    
                    

                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    {/* <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="title" sm={2}>Title</Label>
                                            <Col sm={10}>
                                                <Control.text model=".title"  name="title" id="title" placeholder="Give it a catchy name" />
                                            </Col>
                                        </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="category" sm={2}>Project Category</Label>
                                            <Col sm={10}>
                                                <Control.select name="category" id="category" model=".category" defaultValue="Automation">
                                                    <option value="Automation">Automation</option>
                                                    <option value="Crypto">Crypto</option>
                                                    <option value="Data">Data</option>
                                                    <option value="Game">Game</option>
                                                    <option value="Web Design">Web Design</option>
                                                    <option value="Other">Other</option>
                                                </Control.select>
                                            </Col>
                                            </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="teamSize" sm={2}>Team Size</Label>
                                                <Col sm={10}>
                                                    <Control.text type="number" model=".teamSize" />
                                                </Col> 
                                        </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="description" sm={2}>Details</Label>
                                                <Col sm={10}>
                                                    <Control.text model=".description" name="description" id="description" rows="6" placeholder="Tell us about your project"/>
                                                </Col> 
                                        </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="languages" sm={2}>Languages</Label>
                                            <Col sm={10}>
                                                <Control.select model=".languages" name="languages" id="languages" defaultValue="HTML">
                                                    <option value="HTML">HTML</option>
                                                    <option value="CSS">CSS</option>
                                                    <option value="JS">JS</option>
                                                    <option value="Python">Python</option>
                                                    <option value="C">C</option>
                                                    <option value="C#">C#</option>
                                                    <option value="C++">C++</option>
                                                </Control.select>
                                            </Col>
                                        </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="yearsOfExp" sm={2}>Years of Exp</Label>
                                            <Col sm={10}>
                                                <Control.select model=".yearsOfExp" name="yearsOfExp" id="yearsOfExp" defaultValue="&lt;1 year">
                                                    <option value="&lt;1 year">&lt;1 year</option>
                                                    <option value="1-3 years">1-3 years</option>
                                                    <option value="3-5 years">3-5 years</option>
                                                    <option value="5-10 years">5-10 years</option>
                                                    <option value="10+ years">10+ years</option>
                                                </Control.select>
                                            </Col>
                                        </div>
                                        <div ClassName="form-group row">
                                        <Label htmlFor="time" sm={2}>Weekly Time Commit</Label>
                                            <Col sm={10}>
                                                <Control.select name="time" id="time" model=".time" defaultValue="&lt;5 hours">
                                                    <option value="&lt;5 hours">&lt;5 hours</option>
                                                    <option value="5-10 hours">5-10 hours</option>
                                                    <option value="10-20 hours">10-20 hours</option>
                                                    <option value="20-40 hours">20-40 hours</option>
                                                    <option value="40+ hours">40+ hours</option>
                                                </Control.select>
                                            </Col>
                                        </div>
                                        <div ClassName="form-group row">
                                            <Button type="Submit">Create</Button>
                                        </div>
                                    </LocalForm> */}
                                    {/* <form onSubmit={this.handleSubmit}>
                                        <Label for="title">Project Title</Label>
                                        <Input type="text" name="title" id="title" onChange={this.handleChange}/>
                                        <Label for="category">Project Category</Label>
                                        <Input type="select" name="category" id="category" onChange={this.handleChange} >
                                                <option hidden value="">--</option>
                                                <option value="Automation">Automation</option>
                                                <option value="Crypto">Crypto</option>
                                                <option value="Data">Data</option>
                                                <option value="Game">Game</option>
                                                <option value="Web Design">Web Design</option>
                                                <option value="Other">Other</option>
                                        </Input>
                                        <Label for="description">Project Description</Label>
                                        <Input type="textarea" name="description" id="description" onChange={this.handleChange}/>
                                        <Label for="languages">Languages Needed</Label>
                                        <Input type="select" name="languages" id="languages" onChange={this.handleSelectedMultiple} multiple>
                                                <option value="HTML">HTML</option>
                                                <option value="CSS">CSS</option>
                                                <option value="JS">JS</option>
                                                <option value="Python">Python</option>
                                                <option value="C">C</option>
                                                <option value="C#">C#</option>
                                                <option value="C++">C++</option>
                                        </Input>
                                        <Label for="teamSize">Team Members Needed</Label>
                                        <Input type="number" name="teamSize" id="teamSize" onChange={this.handleChange}/>
                                        <Label for="yearsOfExp">Years of Experience</Label>
                                        <Input type="select" name="yearsOfExp" id="yearsOfExp" onChange={this.handleChange} >
                                            <option hidden value="">--</option>
                                            <option value="&lt;1 year">&lt;1 year</option>
                                            <option value="1-3 years">1-3 years</option>
                                            <option value="3-5 years">3-5 years</option>
                                            <option value="5-10 years">5-10 years</option>
                                            <option value="10+ years">10+ years</option>
                                        </Input>
                                        <Label for="time">Weekly Time Commitment</Label>
                                        <Input type="select" name="time" id="time" onChange={this.handleChange} >
                                            <option hidden value="">--</option>
                                            <option value="5-10 hours">5-10 hours</option>
                                            <option value="10-20 hours">10-20 hours</option>
                                            <option value="20-40 hours">20-40 hours</option>
                                            <option value="40+ hours">40+ hours</option>
                                        </Input>
                                        <Input type="submit" value="Submit" />
                                    </form> */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )

    }
}

export default Create