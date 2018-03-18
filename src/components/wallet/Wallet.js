import React, { Component } from 'react';
import { Button, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';
import { Navigation } from '../../index';
// import  apikey from '../registration/Login';
import { push } from 'react-router-redux';
import  {store} from '../../index';


class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_income:'',
            total_expense:'',
            profit:'',
            date:'',
            amount:'',
            comment:'',
            category_id:'',
            kind:'',
            title:'',
            is_deleted:'bool',
            created_at:'',
            updated_at:'',
            // categories:[]


            // user: [],
        };

    }

    GetWallet(){
        let api_key= localStorage.getItem('api_key');
        console.log(api_key);
        let url ='http://gh-wallet.herokuapp.com/api/v1/wallet';
        fetch(url,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key,

            }})
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState ({
                    wallet: response
                });
                if (response !== '') {

                    localStorage.setItem('total_income', response.wallet.total_income);
                    localStorage.setItem('total_expense', this.wallet.total_expense);
                    localStorage.setItem('profit', response.wallet.profit);
                }
                else {
                    alert("Incorrect email or password!")
                }
            });

    }
    GetCategory(){

    let api_key= localStorage.getItem('api_key');
    let url ='http://gh-wallet.herokuapp.com/api/v1/categories';
        fetch(url,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key,

            }})
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState ({
                    categories: response
                });
                if (response !== '') {


                    localStorage.setItem('category_id', response.categories.id);
                    localStorage.setItem('kind', response.categories.kind);
                    localStorage.setItem('title', response.categories.title);
                    localStorage.setItem('is_deleted', response.categories.is_deleted);
                    localStorage.setItem('title', response.categories.title);
                    localStorage.setItem('created_at', response.categories.created_at);
                    localStorage.setItem('updated_at', response.categories.updated_at);
                }
                else {
                    alert("Incorrect email or password!")
                }
            });


    }
    CreateIncome(){
        let api_key= localStorage.getItem('api_key');
        let incomeData = JSON.stringify({
            entry: {
                date:this.state.date,
                amount:this.state.amount ,
                comment: this.state.comment
            }

        });
        // console.log(incomeData);
        // console.log(api_key);
        let urlincome ='http://gh-wallet.herokuapp.com/api/v1/categories/:categoryId/entries';
        fetch(urlincome,{
            method:'post',
            body:incomeData,
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

            <div className="container-fluid">
                <Navigation/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12} lg={12} sm={12} xs={12}>
                            <div className="wallet" >
                                <div className="profit">
                                    <img  src={ require('../../img/wallet-1.svg')} alt="Check incomes"/>
                                    <li className="wallet-li profit">
                                        <strong>Profit</strong>
                                        <strong><h2>{Math.round(localStorage.getItem('profit'))}grn</h2></strong><br/>
                                    </li>
                                </div>
                                <div className="total-income">
                                    <li className="wallet-li total-income">
                                        <strong>Income</strong>
                                        <strong><h2>{Math.round(localStorage.getItem('total_income'))}grn</h2></strong><br/>
                                    </li>
                                </div>
                                <div className="total-expense">
                                    <li className="wallet-li total-expense">
                                    <strong>Expense</strong>
                                    <strong><h2>{Math.round(localStorage.getItem('total_expense'))}grn</h2></strong><br/>
                                </li>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4} lg={4} sm={12} xs={12}>
                            <div className="incomeform registrationform" >
                                <FormGroup>
                                    <FormControl
                                        className="input-reg"
                                        label="date"
                                        type="text"
                                        value={this.state.date}
                                        placeholder="date"
                                        onChange={(event) => this.setState({ date: event.target.value })}
                                    />
                                    <FormControl.Feedback />
                                    <FormControl
                                        className="input-reg"
                                        label="amount"
                                        type="text"
                                        value={this.state.amount}
                                        placeholder="Enter amount"
                                        onChange={(event) => this.setState({ amount: event.target.value })}
                                    />
                                    <FormControl.Feedback />
                                    <FormControl
                                        className="input-reg"
                                        label="comment"
                                        type="text"
                                        value={this.state.comment}
                                        placeholder="comment"
                                        onChange={(event) => this.setState({ comment: event.target.value })}
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>
                                <ButtonToolbar className="btn-registration">
                                    <Button bsSize="sm" onClick={this.CreateIncome.bind(this)}>Add income</Button>
                                </ButtonToolbar>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default Wallet;
