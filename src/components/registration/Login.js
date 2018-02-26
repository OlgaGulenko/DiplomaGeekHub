import React, { Component } from 'react';
// import { Button, Form,Grid, Row, Col, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';
// import { push } from 'react-router-redux'
// import {store, Navigation} from '../../index';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            email: '',
        };
        this.change = this.change.bind(this);
        this.send = this.send.bind(this);
    }

    change (e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state)
    };


    render() {
        const list = this.state.users.map((user, index) => {
            return (
                <li key={index}>
                    <strong>{user.name}</strong><br/>
                    <strong><h4>Author:{user.email}</h4></strong>
                </li>
            )
        })
        return (
            <div className="container-fluid">
                {/*<Row className="show-grid">*/}
                    {/*<Col md={12} lg={12} sm={12} xs={12}>*/}
                        {/*<div className='regisrform'>*/}
                            {/*<FormGroup>*/}
                                {/*<FormControl*/}
                                    {/*type="text"*/}
                                    {/*name="login"*/}
                                    {/*placeholder="Login"*/}
                                    {/*onChange={this.change}*/}
                                {/*/>*/}
                                {/*<FormControl*/}
                                    {/*type="password"*/}
                                    {/*name="password"*/}
                                    {/*placeholder="Password"*/}
                                    {/*onChange={this.change}*/}
                                {/*/>*/}

                                {/*<FormControl*/}
                                    {/*type="email"*/}
                                    {/*name="email"*/}
                                    {/*placeholder="Email"*/}
                                    {/*onChange={this.change}*/}
                                {/*/>*/}
                                {/*<FormControl*/}
                                    {/*type="date"*/}
                                    {/*name="birthday"*/}
                                    {/*onChange={this.change}*/}
                                {/*/>*/}
                                {/*<FormControl.Feedback />*/}
                            {/*</FormGroup>*/}
                            {/*<ButtonToolbar>*/}
                                {/*<Button bsStyle="primary" onClick={this.send}>*/}
                                    {/*Add user*/}
                                {/*</Button>*/}
                            {/*</ButtonToolbar>*/}
                        {/*</div>*/}
                        <div className='regisrform'>
                            { list }
                        </div>
                    {/*</Col>*/}
                {/*</Row>*/}
            </div>
        );
    }
}

export default Authorization;