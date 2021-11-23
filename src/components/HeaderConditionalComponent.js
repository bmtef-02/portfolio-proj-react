import React, { Component } from 'react';
import Header from "./HeaderComponent"
import HeaderNoLogin from './HeaderNoLoginComponent';

// Test to see if login branch on git works

class HeaderConditional extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        if (isLoggedIn) {
            return <Header />
        } else {
            return <HeaderNoLogin loginHandler={this.loginHandler}/>
        }
    }
}

export default HeaderConditional;