import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, Navbar, NavItem, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, 
    Button, Modal, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';

class HeaderNoLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
        console.log(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {

        return(
            <React.Fragment>
                <Navbar light sticky="top" expand="md">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logoipsum-logo-7.svg" alt="Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/"> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/"> Explore</NavLink>
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
                                <Label htmlfor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlfor="password">Password</Label>
                                <Input type="text" id="password]" name="password"
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