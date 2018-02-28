import React, { Component } from 'react';
import { Button, Form,Grid, Row, Col, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';
import { push } from 'react-router-redux'
import {store, Navigation} from '../../index';

class Login extends Component{

constructor(props){
    super(props);

    this.state = {
        email: '',
        password: '',
        // isValid: true,
        gets:'',
        api_key:''

    };
};
handleChange = (e) =>{
    switch (e.target.name)
    {
        case 'email':
            this.setState({email:e.target.value});
            break;
        case 'password':
            this.setState({password:e.target.value});
            break;
    }
}
Login(){
    let url ='http://gh-wallet.herokuapp.com/api/v1/users?email='+this.state.email+'&password='+this.state.password;
    fetch(url, {method:'get', headers: {'Content-Type': 'application/json'}} )
        .then(response => response.json())
        .then(response => {
            if(response!==''){

                localStorage.setItem('email', this.state.email);
                localStorage.setItem('password', this.state.password);
                debugger;
                localStorage.setItem('api_key', response.users.api_key);

                store.dispatch(push('/users/'+ response.users.api_key))
            }
            else {
                alert("Incorrect email or password!")
            }
        })
}

    render() {
        return (
            <div className="container-fluid">
                <Navigation/>
                <Row className="show-grid">
                    <Col md={12} lg={12} sm={12} xs={12}>
                        <div className='registrationform'>
                            <FormGroup>
                                <FormControl
                                    label="Email address"
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Enter your email here"
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                />
                                <FormControl.Feedback />
                                <FormControl
                                    label="Password"
                                    type="text"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={(event) => this.setState({ password: event.target.value })}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <ButtonToolbar>
                                <Button bsStyle="success" bsSize="large" active onClick={this.Login.bind(this)}>Login</Button>
                            </ButtonToolbar>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;