import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postProject(
            values.title, 
            values.category, 
            values.teamSize, 
            values.description, 
            values.languages, 
            values.yearsOfExp, 
            values.time
        );
    }

    render() {

        return(
            <div>
                <h1>What Are We Building?</h1>
                <div className="container">
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
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
                                    </LocalForm>
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