import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl'

function Footer(props) {
    return(
        <footer className="site-footer mt-4">
            <div className="container-fluid">
                <div className="row">             
                    <div className="col-sm-4 text-center">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/" target="_blank"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center mt-4 mt-sm-0">
                        <a className="brand" href="#">
                            <img className="d-block mx-auto" src={baseUrl + '/images/logoipsum-logo.svg'} height="30" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;