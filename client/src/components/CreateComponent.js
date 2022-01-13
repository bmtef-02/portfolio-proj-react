import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button, Form, FormGroup, Input, Label, Col, Row, FormFeedback, Tooltip } from 'reactstrap';
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
            time: null,
            languages_friendly: null,
            tooltipOpen: false,
            touched: {
                title: false,
                category: false,
                teamSize: false,
                description: false,
                languages: false, 
                yearsOfExp: false,
                time: false,
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectedMultiple = this.handleSelectedMultiple.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
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
        const languages_friendly = values.toString();
        this.setState({languages: values, languages_friendly: languages_friendly});
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

    validate(title, category, description, languages, teamSize, yearsOfExp, time) {
        const errors = {
            title: '',
            category: '',
            description: '',
            languages: '',
            teamSize: '',
            yearsOfExp: '',
            time: ''
        };

        if (this.state.touched.title) {
            console.log(this.state.touched.title);
            console.log(title)

            if(title === null) {
                console.log('validation error created: title is required');
                errors.title = 'Name is required.'
            } else if(title.length > 50) {
                console.log('validation error created: title is too long');
                errors.title = 'Name must be 50 characters or less'
            }
            
        }
        
        if (this.state.touched.category) {
            console.log(this.state.touched.category);
            console.log(category)

            if(category === null) {
                console.log('validation error created: category is required');
                errors.category = 'Select a category. If none of the categories apply, please select "Other".'
            }
            
        }

        if (this.state.touched.description) {
            console.log(this.state.touched.description);
            console.log(description)

            if(description === null) {
                console.log('validation error created: description is required');
                errors.description = 'Description is required.'
            }
            
        }

        if (this.state.touched.languages) {
            console.log(this.state.touched.languages);
            console.log(languages)

            if(languages === null) {
                console.log('validation error created: languages is required');
                errors.languages = 'At least one language selection is required.'
            }
            
        }

        if (this.state.touched.teamSize) {
            console.log(this.state.touched.teamSize);
            console.log(teamSize)

            if(teamSize === null) {
                console.log('validation error created: teamSize is required');
                errors.teamSize = 'Choosing your team size is required.'
            }
            
        }

        if (this.state.touched.yearsOfExp) {
            console.log(this.state.touched.yearsOfExp);
            console.log(yearsOfExp)

            if(yearsOfExp === null) {
                console.log('validation error created: yearsOfExp is required');
                errors.yearsOfExp = 'Years of experience is required'
            }
            
        }

        if (this.state.touched.time) {
            console.log(this.state.touched.time);
            console.log(time)

            if(time === null) {
                console.log('validation error created: time is required');
                errors.time = 'Weekly time commitment is required.'
            }
            
        }
        console.log("these are all the errors from the validate function: " + errors)
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
    }

    render() {

        const errors = this.validate(this.state.title, this.state.category, this.state.description, this.state.languages, this.state.teamSize, this.state.yearsOfExp, this.state.time);
        console.log(errors.title, errors.category, errors.description, errors.languages, errors.teamSize, errors.yearsOfExp, errors.time);

        return(
            <div>
                <h1>What Are We Building?</h1>
                <div className="container">
                    <Tabs defaultTab="vertical-tab-one" vertical>
                            <TabList>
                                <Tab tabFor="vertical-tab-name" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i className="fa fa-pencil" aria-hidden="true"></i> Name
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.title ? "fa fa-circle-o" : (!errors.title) ? "fa fa-check-circle-o" : "fa fa-times-circle-o"} aria-hidden="true" style={!this.state.title ? {color: "black"} : (!errors.title) ? {color: "green"} : {color: "red"}}></i>
                                        </Col>
                                    </Row>
                                </Tab>  
                                <Tab tabFor="vertical-tab-category" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-th" aria-hidden="true"></i> Category
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.category ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.category ? {color: "black"} : {color: "green"}}></i>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab tabFor="vertical-tab-description" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-align-justify" aria-hidden="true"></i> Description
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.description ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.description ? {color: "black"} : {color: "green"}}></i>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab tabFor="vertical-tab-languages" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-code" aria-hidden="true"></i> Languages
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.languages ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.languages ? {color: "black"} : {color: "green"}}></i>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab tabFor="vertical-tab-teamSize" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-users" aria-hidden="true"></i> Team Size
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.teamSize ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.teamSize ? {color: "black"} : {color: "green"}}></i>
                                        </Col>
                                    </Row> 
                                </Tab>
                                <Tab tabFor="vertical-tab-experience" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-black-tie" aria-hidden="true"></i> Experience
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.yearsOfExp ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.yearsOfExp ? {color: "black"} : {color: "green"}}></i>
                                        </Col>
                                    </Row> 
                                </Tab>
                                <Tab tabFor="vertical-tab-time" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-clock-o" aria-hidden="true"></i> Weekly Time Commitment
                                        </Col> 
                                        <Col className="complete-icon">
                                            <i className={!this.state.time ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.time ? {color: "black"} : {color: "green"}}></i>
                                        </Col>
                                    </Row> 
                                </Tab>
                                <Tab tabFor="vertical-tab-submit" className="tab-button">
                                    <Row>
                                        <Col xs="9">
                                            <i class="fa fa-paper-plane" aria-hidden="true"></i> Review and Submit
                                        </Col> 
                                        {/* <Col className="complete-icon">
                                            <i className={!this.state.title ? "fa fa-circle-o" : "fa fa-check-circle-o"} aria-hidden="true" style={!this.state.title ? {color: "black"} : {color: "green"}}></i>
                                        </Col> */}
                                    </Row> 
                                </Tab>
                            </TabList>
                        <form onSubmit={this.handleSubmit}>
                            <TabPanel tabId="vertical-tab-name">
                                <h2>Name</h2>
                                <p>Use a short and simple name for your project. Don't worry you'll have more room to describe your project in the Description section.</p>
                                <ul>
                                    <li>Keep it simple and sweet</li>
                                    <li>50 characters or less</li>
                                </ul>
                                <Input 
                                    type="text" 
                                    name="title" 
                                    id="title" 
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur('title')}
                                    invalid={errors.title}
                                />
                                <FormFeedback>
                                    {errors.title}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-category">
                                <h2>Category</h2>
                                <p>What category does your project best fit into? If you can't find one that matches your project, choose "Other"</p>   
                                <Input 
                                    type="select" 
                                    name="category" 
                                    id="category" 
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur('category')}
                                    invalid={errors.category} 
                                >
                                    <option hidden value="">--</option>
                                    <option value="Automation">Automation</option>
                                    <option value="Crypto">Crypto</option>
                                    <option value="Data">Data</option>
                                    <option value="Game">Game</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Other">Other</option>
                                </Input>
                                <FormFeedback>
                                    {errors.category}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-description">
                                <h2>Description</h2>
                                <p>Spill the beans on your master plan. Give a thorough explanation of what you're building and the help you need from your team. Spare no details!</p>
                                <Input 
                                    type="textarea" 
                                    name="description" 
                                    id="description" 
                                    rows={10}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur('description')}
                                    invalid={errors.description}
                                />
                                <FormFeedback>
                                    {errors.description}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-languages">
                                <h2>Languages</h2>
                                <p>Finely tune your team by picking the languages you're envisioning your project to be build with. Choose as many as you'd like.</p>
                                <Input 
                                    type="select" 
                                    name="languages" 
                                    id="languages" 
                                    onChange={this.handleSelectedMultiple} 
                                    multiple
                                    onBlur={this.handleBlur('languages')}
                                    invalid={errors.languages}
                                >
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="JS">JS</option>
                                    <option value="Python">Python</option>
                                    <option value="C">C</option>
                                    <option value="C#">C#</option>
                                    <option value="C++">C++</option>
                                </Input>
                                <FormFeedback>
                                    {errors.languages}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-teamSize">
                                <h2>Team Size</h2>
                                <p>This one's pretty simple. How many team members do you need?</p>
                                <Input 
                                    type="select" 
                                    name="teamSize" 
                                    id="teamSize" 
                                    onChange={this.handleChange} 
                                    onBlur={this.handleBlur('teamSize')}
                                    invalid={errors.teamSize}
                                >
                                    <option hidden value="">--</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>     
                                    <option value="7">7</option>                                
                                </Input>
                                <FormFeedback>
                                    {errors.teamSize}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-experience">
                                <h2>Experience</h2>
                                <p>Some projects are harder than others. How many years of experience should your team members have?</p>
                                <Input 
                                    type="select" 
                                    name="yearsOfExp" 
                                    id="yearsOfExp" 
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur('yearsOfExp')}
                                    invalid={errors.yearsOfExp} 
                                >
                                    <option hidden value="">--</option>
                                    <option value="&lt;1 year">&lt;1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="3-5 years">3-5 years</option>
                                    <option value="5-10 years">5-10 years</option>
                                    <option value="10+ years">10+ years</option>
                                </Input>
                                <FormFeedback>
                                    {errors.yearsOfExp}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-time">
                                <h2>Weekly Time Commitment</h2>
                                <p>Setting expectations on time commitment is important from the start. How many hours a week should your team be spending on your project?</p>
                                <Input 
                                    type="select" 
                                    name="time" 
                                    id="time" 
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur('time')}
                                    invalid={errors.time} 
                                >
                                    <option hidden value="">--</option>
                                    <option value="5-10 hours">5-10 hours</option>
                                    <option value="10-20 hours">10-20 hours</option>
                                    <option value="20-40 hours">20-40 hours</option>
                                    <option value="40+ hours">40+ hours</option>
                                </Input>
                                <FormFeedback>
                                    {errors.time}
                                </FormFeedback>
                            </TabPanel>
                            <TabPanel tabId="vertical-tab-submit">
                                <h2>Review and Submit</h2>
                                <p>Final check. Does everything look right? You can always click back and edit. When you're ready, create your project.</p>
                                <h4>Name</h4>
                                <p>{this.state.title}</p>
                                <p style={!errors.title ? {display: "none"} : {display: "block"}}>Error: {errors.title}</p>
                                <h4>Category</h4>
                                <p>{this.state.category}</p>
                                <p style={!errors.category ? {display: "none"} : {display: "block"}}>Error: {errors.category}</p>
                                <h4>Description</h4>
                                <p>{this.state.description}</p>
                                <p style={!errors.description ? {display: "none"} : {display: "block"}}>Error: {errors.description}</p>
                                <h4>Languages</h4>
                                <p>{this.state.languages_friendly}</p>
                                <p style={!errors.languages ? {display: "none"} : {display: "block"}}>Error: {errors.languages}</p>
                                <h4>Team Size</h4>
                                <p>{this.state.teamSize}</p>
                                <p style={!errors.teamSize ? {display: "none"} : {display: "block"}}>Error: {errors.teamSize}</p>
                                <h4>Experience</h4>
                                <p>{this.state.yearsOfExp}</p>
                                <p style={!errors.yearsOfExp ? {display: "none"} : {display: "block"}}>Error: {errors.yearsOfExp}</p>
                                <h4>Weekly Time Commitment</h4>
                                <p>{this.state.time}</p>
                                <p style={!errors.time ? {display: "none"} : {display: "block"}}>Error: {errors.time}</p>
                                <Input type="submit" id="form-submit" value="Create my project" />
                                {/* <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} toggle={this.toggle} target="form-submit">Project submission has errors. Please resolve before you can create your project.</Tooltip> */}
                            </TabPanel>
                        </form>
                    </Tabs>
                    
                    

                    {/* <Row>
                        <Col>
                            <Card>
                                <CardBody> */}
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
                                {/* </CardBody>
                            </Card>
                        </Col>
                    </Row> */}
                </div>
            </div>
        )

    }
}

export default Create