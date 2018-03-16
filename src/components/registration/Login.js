import React, {Component} from 'react';
import {Button, Form, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl} from 'react-bootstrap';
import {push} from 'react-router-redux'
import {store, Navigation} from '../../index';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            api_key:''

        };
        // export const apikey = this.state.api_key;
        // console.log(apikey);

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
                console.log(response);
                this.setState({
                    post: response
                });

                if (response !== '') {

                    localStorage.setItem('email', this.state.email);
                    localStorage.setItem('password', this.state.password);
                    localStorage.setItem('api_key', this.state.api_key);
                }
                else {
                    alert("Incorrect email or password!")
                }
            });
    }


    render() {
        return (
            <div>
                <div className="container-fluid cont-marg">
                    <div className="header-log">
                        <div className="mask"> </div>
                        <Navigation/>
                        <Grid>
                            <Row className="show-grid">
                                <Col md={4} lg={4} sm={12} xs={12}>
                                    <div className='registrationform'>
                                        <FormGroup>
                                            <FormControl
                                                className="input-reg"
                                                label="Email address"
                                                type="text"
                                                value={this.state.email}
                                                placeholder="Enter your email here"
                                                onChange={(event) => this.setState({email: event.target.value})}
                                            />
                                            <FormControl.Feedback/>
                                            <FormControl
                                                className="input-reg"
                                                label="Password"
                                                type="text"
                                                value={this.state.password}
                                                placeholder="Password"
                                                onChange={(event) => this.setState({password: event.target.value})}
                                            />
                                            <FormControl.Feedback/>
                                        </FormGroup>
                                        <ButtonToolbar className="btn-registration">
                                            <Button bsSize="sm" onClick={this.Login.bind(this)}>Login</Button>
                                        </ButtonToolbar>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;