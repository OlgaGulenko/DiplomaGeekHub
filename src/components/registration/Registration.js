import React, { Component } from 'react';
import { Button, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';
import { Navigation } from '../../index';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: '',
            email: '',
            password: '',
            allow: 1,

        };
        this.onMyChange = this.onMyChange.bind(this);
        this.onMyClick = this.onMyClick.bind(this);
    }
    onMyClick(){

    }
    onMyChange(e){
        switch (e.target.name)
        {
            case 'name':
                this.setState({names:e.target.value});
                break;
            case 'login':
                this.setState({login:e.target.value});
                break;
            case 'pass':
                this.setState({pass:e.target.value});
                break;
        }
    }
    CreateAccount(){
        let userData = JSON.stringify({
            user: {
                name:this.state.names,
                email:this.state.email ,
                password: this.state.password
            }

        });
        console.log(userData);

        let url ='http://gh-wallet.herokuapp.com/api/v1/register';
        fetch(url,{
            method:'post',
            body:userData,
            headers: {'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(response => {
                this.setState ({
                    post: response
                });
            });
    }

    render() {
        return (
        <div>
            <div className="container-fluid cont-marg">
                <Navigation/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} lg={6} sm={12} xs={12}>
                            <div className="registrationform" >
                                <FormGroup>
                                    <FormControl
                                        className="input-reg"
                                        label="Name"
                                        type="text"
                                        value={this.state.names}
                                        placeholder="Enter your name here"
                                        onChange={(event) => this.setState({ names: event.target.value })}
                                    />
                                    <FormControl.Feedback />
                                    <FormControl
                                        className="input-reg"
                                        label="Email address"
                                        type="text"
                                        value={this.state.email}
                                        placeholder="Enter your email here"
                                        onChange={(event) => this.setState({ email: event.target.value })}
                                    />
                                    <FormControl.Feedback />
                                    <FormControl
                                        className="input-reg"
                                        label="Password"
                                        type="text"
                                        value={this.state.password}
                                        placeholder="Password"
                                        onChange={(event) => this.setState({ password: event.target.value })}
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>
                                <ButtonToolbar className="btn-registration">
                                    <Button bsSize="sm" onClick={this.CreateAccount.bind(this)}>Create account</Button>
                                </ButtonToolbar>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>

        );
    }
}

export default Registration;
