import React, { Component } from 'react';
import {Card} from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div>
                <h1>Team up.</h1>
                <div className="container">
                    <div className="row">
                        <div className="form-group col-md-8">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div className="col">
                            <a href="/search-results"><button className="btn btn-primary" type="submit">Search</button></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label className="col-form-label" for="projCategory">Project Category</label>
                            <select name="projCategory" id="projCategory" className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <label className="col-form-label" for="languages">Languages</label>
                            <select name="languages" id="languages" className="form-control">
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">JS</option>
                                <option value="4">Python</option>
                                <option value="5">C</option>
                                <option value="6">C#</option>
                                <option value="6">C++</option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <label className="col-form-label" for="yearsOfExp">Years of Exp</label>
                            <select name="yearsOfExp" id="yearsOfExp" className="form-control">
                                <option value="1">&lt;1 year</option>
                                <option value="2">1-3 years</option>
                                <option value="3">3-5 years</option>
                                <option value="4">5-10 years</option>
                                <option value="5">10+ years</option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <label className="col-form-label" for="timeCommit">Weekly Time Commit</label>
                            <select name="timeCommit" id="timeCommit" className="form-control">
                                <option value="1">&lt;5 hours</option>
                                <option value="2">5-10 hours</option>
                                <option value="3">10-20 hours</option>
                                <option value="4">20-40 hours</option>
                                <option value="5">40+ hours</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )

    };
}

export default Search;