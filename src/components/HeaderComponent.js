import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, Navbar, NavItem, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar light sticky="top" expand="md" className="bg-dark">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/assets/images/logoipsum-logo-7.svg" alt="Logo"/> 
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link text-muted" to="/home"> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-muted" to="/directory"> Explore</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-muted" to="/create-a-project"> Create a Project</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <img src="/assets/images/mike.jpg" width="30" className="rounded-circle" /> <Badge color="success">4</Badge>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-muted" to="/directory"> Profile</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-muted" to="/directory"> My Projects</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-muted" to="/directory"> Messages <Badge color="success">4</Badge></NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link text-muted" to="/directory"> Preferences</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <NavLink className="nav-link text-muted" to="/directory"> Log Out</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
