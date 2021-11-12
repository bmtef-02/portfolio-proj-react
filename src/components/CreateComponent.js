import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            time: '',
            category: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postProject(values.title, values.description, values.time, values.category);
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
                                                <Control.select name="category" id="category" model=".category" defaultValue="1">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </Control.select>
                                            </Col>
                                            </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="teamSize" sm={2}>Team Size</Label>
                                                <Col sm={10}>
                                                    <Control.select model=".teamSize" name="teamSize" id="teamSize">
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                    </Control.select>
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
                                                <Control.select model=".languages" name="languages" id="languages">
                                                    <option value="1">HTML</option>
                                                    <option value="2">CSS</option>
                                                    <option value="3">JS</option>
                                                    <option value="4">Python</option>
                                                    <option value="5">C</option>
                                                    <option value="6">C#</option>
                                                    <option value="6">C++</option>
                                                </Control.select>
                                            </Col>
                                        </div>
                                        <div ClassName="form-group row">
                                            <Label htmlFor="yearsOfExp" sm={2}>Years of Exp</Label>
                                            <Col sm={10}>
                                                <Control.select model=".yearsOfExp" name="yearsOfExp" id="yearsOfExp">
                                                    <option value="1">&lt;1 year</option>
                                                    <option value="2">1-3 years</option>
                                                    <option value="3">3-5 years</option>
                                                    <option value="4">5-10 years</option>
                                                    <option value="5">10+ years</option>
                                                </Control.select>
                                            </Col>
                                        </div>
                                        <div ClassName="form-group row">
                                        <Label htmlFor="time" sm={2}>Weekly Time Commit</Label>
                                            <Col sm={10}>
                                                <Control.select name="time" id="time" model=".time">
                                                    <option value="1">&lt;5 hours</option>
                                                    <option value="2">5-10 hours</option>
                                                    <option value="3">10-20 hours</option>
                                                    <option value="4">20-40 hours</option>
                                                    <option value="5">40+ hours</option>
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