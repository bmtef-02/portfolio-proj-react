import React, { Component } from 'react';
import Header from "./HeaderComponent"
import HeaderNoLogin from './HeaderNoLoginComponent';

class HeaderConditional extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        if (isLoggedIn) {
            return <Header />
        } else {
            return <HeaderNoLogin onClick={this.handleLoginClick}/>
        }
    }
}

export default HeaderConditional;