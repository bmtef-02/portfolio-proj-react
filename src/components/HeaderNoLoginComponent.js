import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, Navbar, NavItem, NavbarBrand, 
    Button, Form, FormGroup, FormFeedback, Input, Label, 
    Modal, ModalHeader, ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

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
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
    }

    // this method will validate the passed in parameters
    validate(username) {
        const errors = {
            username: "",
        }

        if (this.state.touched.username) {
            if (username.length < 2) {
                errors.username = "Username must be at least 2 characters.";
            } else if (username.length > 15) {
                errors.username = "Username must be 15 characters or less";
            }
        }

        return errors;
    }

    // this method checks if field is touched
    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    // this method handles changes in the form elements
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        const errors = this.validate(this.state.username);

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
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    value={this.state.username}
                                    invalid={errors.username}
                                    onBlur={this.handleBlur("username")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="text" id="password" name="password"
                                    innerRef={input => this.password = input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input}
                                    />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button onClick={this.props.onClick} type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>            
        );
    }
}

export default HeaderNoLogin;