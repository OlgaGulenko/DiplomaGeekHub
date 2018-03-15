import React, { Component } from 'react';
import { Button, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';
import { Navigation } from '../../index';
import { store } from '../../index';
import { push } from 'react-router-redux';
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet:[],
            // api_key:''
            user: []

            // total_income: '',
            // total_expense: '',
            // profit: '',

        };

    }
    GetWallet(){

        let url ='http://gh-wallet.herokuapp.com/api/v1/wallet/';
        fetch(url,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': this.state.api_key,

            }})
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                this.setState ({
                    wallet: response
                });
            });
    }

    render() {
        const wallet = this.state.wallet.map((route, index) => {
            return (
                <li key={index}>
                    <strong>Profit</strong>
                    <strong><h2>{Math.round(wallet.profit)}grn</h2></strong><br/>
                    <strong>Income</strong>
                    <strong><h2>{Math.round(wallet.total_income)}grn</h2></strong><br/>
                    <strong>Expense</strong>
                    <strong><h2>{Math.round(wallet.total_expense)}grn</h2></strong><br/>
                </li>
            )
        })
        return (

            <div className="container-fluid">
                <Navigation/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} lg={6} sm={12} xs={12}>
                            <ButtonToolbar>
                                <Button bsStyle="primary" bsSize="large" active onClick={() => store.dispatch(push('/wallet/' + this.state.user.api_key))}>Create wallet</Button>
                            </ButtonToolbar>
                            <div className="wallet" >
                                {wallet}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default Wallet;
