import React, {Component} from 'react';
import {Button, Form, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl} from 'react-bootstrap';
import {push} from 'react-router-redux'
import {store, Navigation} from '../../index';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''

        };
    };
    Login() {

        let loginData = JSON.stringify({
                email: this.state.email,
                password: this.state.password
        });
        console.log(loginData);
        let url = 'http://gh-wallet.herokuapp.com/api/v1/login';
        fetch(url, {
            method: 'post',
            body: loginData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    post: response
                });

                if (response !== '') {

                    localStorage.setItem('email', this.state.email);
                    localStorage.setItem('password', this.state.password);
                }
                else {
                    alert("Incorrect email or password!")
                }
            });
    }


    render() {
        return (
            <div className="container-fluid">
                <Navigation/>
                <Row className="show-grid red">
                    <Col md={12} lg={12} sm={12} xs={12}>
                        <div className='registrationform'>
                            <FormGroup>
                                <FormControl
                                    label="Email address"
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Enter your email here"
                                    onChange={(event) => this.setState({email: event.target.value})}
                                />
                                <FormControl.Feedback/>
                                <FormControl
                                    label="Password"
                                    type="text"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={(event) => this.setState({password: event.target.value})}
                                />
                                <FormControl.Feedback/>
                            </FormGroup>
                            <ButtonToolbar>
                                <Button bsStyle="success" bsSize="middle" active
                                        onClick={this.Login.bind(this)}>Login</Button>
                            </ButtonToolbar>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;