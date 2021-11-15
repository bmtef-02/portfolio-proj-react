import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Button, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';
import { FormControl, Input, TextField, Select, MenuItem, InputLabel, OutlinedInput, Checkbox, ListItemText,  } from '@mui/material'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'Python',
    'C',
    'C#',
    'C++'
  ];

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: []
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
                                    <FormControl onSubmit={values => this.handleSubmit(values)}>
                                        <Row>
                                            <Col>
                                                <TextField id="title" name="title" label="Title" type="text" variant="standard" placeholder="Give it a catchy name"/>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                <InputLabel id="category">Category</InputLabel>
                                                <Select labelId="category" name="category"  label="Category" variant="standard" placeholder="Category">
                                                    <MenuItem value="Automation">Automation</MenuItem>
                                                    <MenuItem value="Crypto">Crypto</MenuItem>
                                                    <MenuItem value="Data">Data</MenuItem>
                                                    <MenuItem value="Game ">Game</MenuItem>
                                                    <MenuItem value="Web Design">Web Design</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                <TextField id="teamSize" name="teamSize" label="Team Size" type="number" variant="standard"/>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                <TextField id="description" name="description" label="Description" multiline rows={5} variant="standard"/>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                <InputLabel id="languages">Languages</InputLabel>
                                                <Select 
                                                    labelId="languages" 
                                                    name="languages"  
                                                    label="Languages" 
                                                    variant="standard" 
                                                    placeholder="Languages"
                                                    value={this.state.languages}
                                                    multiple
                                                    input={<OutlinedInput label="Tag" />}
                                                    MenuProps={MenuProps}
                                                    renderValue={(selected) => selected.join(', ')}
                                                >
                                                     {languages.map((language) => (
                                                        <MenuItem
                                                            key={language}
                                                            value={language}
                                                         >
                                                            <Checkbox checked={this.state.languages.indexOf(language)}/>
                                                            <ListItemText primary={language} />
                                                            
                                                        </MenuItem>
                                                     ))}
                                                </Select>
                                            </Col>
                                        </Row>
                                    </FormControl>
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