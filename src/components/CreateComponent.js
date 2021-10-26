import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';

class Create extends Component {
    constructor(props) {
        super(props);

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
                                    <Form>
                                        <FormGroup row>
                                            <Label htmlFor="title" sm={2}>Title</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="title" id="title" placeholder="Give it a catchy name"></Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="projCategory" sm={2}>Project Category</Label>
                                            <Col sm={10}>
                                                <Input type="select" name="projCategory" id="projCategory">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="teamSize" sm={2}>Team Size</Label>
                                                <Col sm={10}>
                                                    <Input type="select" name="teamSize" id="teamSize">
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                    </Input>
                                                </Col> 
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="details" sm={2}>Details</Label>
                                                <Col sm={10}>
                                                    <Input type="textarea" name="details" id="details" rows="6" placeholder="Tell us about your project"/>
                                                </Col> 
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="languages" sm={2}>Languages</Label>
                                            <Col sm={10}>
                                                <Input type="select" name="languages" id="languages" multiple>
                                                    <option value="1">HTML</option>
                                                    <option value="2">CSS</option>
                                                    <option value="3">JS</option>
                                                    <option value="4">Python</option>
                                                    <option value="5">C</option>
                                                    <option value="6">C#</option>
                                                    <option value="6">C++</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="yearsOfExp" sm={2}>Years of Exp</Label>
                                            <Col sm={10}>
                                                <Input type="select" name="yearsOfExp" id="yearsOfExp">
                                                    <option value="1">&lt;1 year</option>
                                                    <option value="2">1-3 years</option>
                                                    <option value="3">3-5 years</option>
                                                    <option value="4">5-10 years</option>
                                                    <option value="5">10+ years</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                        <Label htmlFor="timeCommit" sm={2}>Weekly Time Commit</Label>
                                            <Col sm={10}>
                                                <Input type="select" name="timeCommit" id="timeCommit">
                                                    <option value="1">&lt;5 hours</option>
                                                    <option value="2">5-10 hours</option>
                                                    <option value="3">10-20 hours</option>
                                                    <option value="4">20-40 hours</option>
                                                    <option value="5">40+ hours</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button type="Submit">Create</Button>
                                        </FormGroup>
                                    </Form>
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