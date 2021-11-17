import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, Navbar, NavItem, NavbarBrand, 
    Button, Label, Row,
    Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class HeaderNoLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,

            // these props correspond to the login modal inputs
            username: "",
            password: "",
            remember: false,

            // this prop checks if user clicked the fields. If false, don't run input validation
            touched: {
                username: false,
                password: false,
            }
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(values) {
        this.toggleModal();
    }

    render() {

        return(
            <React.Fragment>
                <Navbar light sticky="top" expand="md" className="bg-dark">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={baseUrl + 'images/logoipsum-logo.svg'} alt="Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link text-muted" to="/home"> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-muted" to="/"> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-muted" to="/"> Explore</NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text">
                            <Button outline onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                            </Button>
                        </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <div>
                            <LocalForm onSubmit={this.handleLogin}>
                                <Row className="form-group">
                                    <Label htmlFor="username">Username</Label>
                                    <Control.text model=".username" id="username" name="username" 
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password">Password</Label>
                                    <Control.text model=".password" id="password" name="password"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(6),
                                            maxLength: maxLength(21)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 6 characters',
                                            maxLength: 'Must be 21 characters or less'
                                        }}
                                    />
                                </Row>
                                <Row className="form-group">
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".remember" name="remember" />
                                            Remember Me
                                        </Label>
                                    </div>
                                </Row>
                                <Row className="form-group">
                                    <Button onClick={this.props.onClick} type="submit" color="primary">Login</Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>            
        );
    }
}

export default HeaderNoLogin;