import React, {Component} from 'react';
import {
    Button,
    Grid,
    Row,
    Col,
    ButtonToolbar,
    FormGroup,
    FormControl,
    MenuItem,
    SplitButton,
    DropdownButton,
    NavDropdown,
    Nav,
    Navbar,
    Modal,
    Jumbotron,
    NavItem
} from 'react-bootstrap';
import {Navigation} from '../../index';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_income: '',
            total_expense: '',
            profit: '',
            amount: '',
            comment: '',
            category_id: '',
            user_id: '',
            title_category: '',
            date: moment(),
            categories: []
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(date) {
        this.setState({
            date: date
        });
    };

    GetWallet() {
        console.log(this.state.total_expense);
        let api_key = localStorage.getItem('api_key');
        // console.log(api_key);
        let url = 'http://gh-wallet.herokuapp.com/api/v1/wallet';
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key,

            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    wallet: response
                });
                if (response !== '') {

                    localStorage.setItem('total_income', response.wallet.total_income);
                    localStorage.setItem('total_expense', response.wallet.total_expense);
                    localStorage.setItem('profit', response.wallet.profit);
                }
                else {
                    alert("Incorrect email or password!")
                }
            });


    }

    GetCategoryIncome() {

        let api_key = localStorage.getItem('api_key');
        if (api_key !== null) {
            let url = 'http://gh-wallet.herokuapp.com/api/v1/categories?kind=income';
            fetch(url, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': api_key,

                }
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.setState({
                        categories: response.categories
                    });
                    if (response !== '') {
                        localStorage.setItem('categories', response.categories);
                        localStorage.setItem('category_id', response.categories.id);
                        // localStorage.setItem('kind', response.categories.kind);
                        localStorage.setItem('title_category', response.categories.title);
                        // localStorage.setItem('is_deleted', response.categories.is_deleted);
                        // localStorage.setItem('title', response.categories.title);
                        // localStorage.setItem('created_at', response.categories.created_at);
                        // localStorage.setItem('updated_at', response.categories.updated_at);
                    }
                    else {
                        alert("Incorrect email or password!")
                    }
                });
        }
        else {
            alert('wqeert');
        }

    }

    GetCategoryExpense() {

        let api_key = localStorage.getItem('api_key');
        if (api_key !== null) {
            let url = 'http://gh-wallet.herokuapp.com/api/v1/categories?kind=expense';
            fetch(url, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': api_key,

                }
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.setState({
                        categories: response.categories
                    });
                    if (response !== '') {
                        localStorage.setItem('categories', response.categories);
                        localStorage.setItem('category_id', response.categories.id);
                        localStorage.setItem('title_category', response.categories.title);
                    }
                    else {
                        alert("Incorrect email or password!")
                    }
                });
        }
        else {
            alert('qwerty');
        }

    }

    CreateIncome() {
        var value = new Date().toISOString();
        let api_key = localStorage.getItem('api_key');
        let category_id = this.state.category_id;
        console.log('cat id ', category_id);
        let incomeData = JSON.stringify({
            entry: {
                date: this.state.date,
                amount: this.state.amount,
                comment: this.state.comment,
                category_id,

            }
        });
        console.log(incomeData);
        console.log(category_id);
        let urlincome = 'http://gh-wallet.herokuapp.com/api/v1/categories/' + category_id + '/entries';
        fetch(urlincome, {
            method: 'post',
            body: incomeData,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key,
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    post: response

                });

                this.GetWallet();
            });

    }

    CreateExpense() {
        var value = new Date().toISOString();
        let api_key = localStorage.getItem('api_key');
        let category_id = this.state.category_id;
        console.log('cat id ', category_id);
        let incomeData = JSON.stringify({
            entry: {
                date: this.state.date,
                amount: this.state.amount,
                comment: this.state.comment,
                category_id,

            }
        });
        console.log(incomeData);
        console.log(category_id);
        let urlincome = 'http://gh-wallet.herokuapp.com/api/v1/categories/' + category_id + '/entries';
        fetch(urlincome, {
            method: 'post',
            body: incomeData,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key,
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    post: response

                });

                this.GetWallet();
            });

    }

    render() {
        Charts(FusionCharts);
        let myDataSource = {
            chart: {
                caption: 'Wallet',
                subCaption: 'Statistic',
                numberPrefix: '₴',
                theme: 'carbon',
            },
            data: [
                {
                    label: 'Expense',
                    value: localStorage.getItem('total_expense'),
                },
                {
                    label: 'Profit',
                    value: localStorage.getItem('profit'),
                },
                {
                    label: 'Income',
                    value: localStorage.getItem('total_income'),
                },

            ],
        };

        return (
            <div className='walletpage'>
                {(localStorage.getItem('api_key')) !== null ? (
                    <div className="container-fluid">
                        <Navigation/>

                        <Grid>
                            <Row className="show-grid">
                                <Col md={12} lg={12} sm={12} xs={12}>
                                    <div className="wallet">
                                        <div className="profit">
                                            <img src={require('../../img/wallet.svg')} alt="Check incomes"/>
                                            <li className="wallet-li profit">
                                                <strong>Profit</strong>
                                                <strong><h2>{Math.round(localStorage.getItem('profit'))}grn</h2>
                                                </strong><br/>
                                            </li>
                                        </div>
                                        <div className="total-income">
                                            <li className="wallet-li total-income">
                                                <strong>Income</strong>
                                                <strong><h2>{Math.round(localStorage.getItem('total_income'))}grn</h2>
                                                </strong><br/>
                                            </li>
                                        </div>
                                        <div className="total-expense">
                                            <li className="wallet-li total-expense">
                                                <strong>Expense</strong>
                                                <strong><h2>{Math.round(localStorage.getItem('total_expense'))}grn</h2>
                                                </strong><br/>
                                            </li>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>)
                        <Grid>
                            <Row className="show-grid">
                                <Col md={4} lg={6} sm={12} xs={12}>
                                    <div className="incomeform registrationform">
                                        <span> Create your income</span>
                                        <FormGroup>
                                            <DatePicker
                                                selected={this.state.date}
                                                onChange={this.handleChange}
                                            />
                                            <FormControl
                                                className="input-reg inp"
                                                label="amount"
                                                type="text"
                                                value={this.state.amount}
                                                placeholder="Enter amount"
                                                onChange={(event) => this.setState({amount: event.target.value})}
                                            />
                                            <FormControl.Feedback/>
                                            <FormControl
                                                className="input-reg inp"
                                                label="comment"
                                                type="text"
                                                value={this.state.comment}
                                                placeholder="comment"
                                                onChange={(event) => this.setState({comment: event.target.value})}
                                            />
                                            <FormControl.Feedback/>

                                            <DropdownButton
                                                label="Category"
                                                title="Category"
                                                id="categoriesDropdown"
                                                key={this.state.categories.id}
                                                onSelect={(eventKey) => {
                                                    this.setState({category_id: eventKey})
                                                }}
                                                onClick={this.GetCategoryIncome.bind(this)}
                                            >
                                                {this.state.categories.map((category) => {
                                                    console.log(category.id);
                                                    return (
                                                        <MenuItem className="cat-item" eventKey={category.id}
                                                                  key={category.id}>
                                                            {category.title}
                                                        </MenuItem>
                                                    )
                                                })}
                                            </DropdownButton>

                                        </FormGroup>
                                        <ButtonToolbar className="btn-registration">
                                            <Button bsSize="sm" onClick={this.CreateIncome.bind(this)}>Add
                                                income</Button>
                                        </ButtonToolbar>
                                    </div>
                                </Col>

                                <Col md={4} lg={6} sm={12} xs={12}>
                                    <div className="incomeform registrationform">

                                        <span> Create expence</span>
                                        <FormGroup>
                                            <DatePicker
                                                selected={this.state.date}
                                                onChange={this.handleChange}
                                            />
                                            <FormControl
                                                className="input-reg inp"
                                                label="amount"
                                                type="text"
                                                value={this.state.amount}
                                                placeholder="Enter amount"
                                                onChange={(event) => this.setState({amount: event.target.value})}
                                            />
                                            <FormControl.Feedback/>
                                            <FormControl
                                                className="input-reg inp"
                                                label="comment"
                                                type="text"
                                                value={this.state.comment}
                                                placeholder="comment"
                                                onChange={(event) => this.setState({comment: event.target.value})}
                                            />
                                            <FormControl.Feedback/>

                                            <DropdownButton
                                                label="Category"
                                                title="Category"
                                                id="categoriesDropdown"
                                                key={this.state.categories.id}
                                                onSelect={(eventKey) => {
                                                    this.setState({category_id: eventKey})
                                                }}
                                                onClick={this.GetCategoryExpense.bind(this)}
                                            >
                                                {this.state.categories.map((category) => {
                                                    console.log(category.id);
                                                    return (
                                                        <MenuItem eventKey={category.id} key={category.id}>
                                                            {category.title}
                                                        </MenuItem>
                                                    )
                                                })}
                                            </DropdownButton>

                                        </FormGroup>
                                        <ButtonToolbar className="btn-registration">
                                            <Button bsSize="sm" onClick={this.CreateExpense.bind(this)}>Add
                                                income</Button>
                                        </ButtonToolbar>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} lg={12} sm={12} xs={12}>
                                    <div className="graphic">
                                        <ReactFC
                                            width="800"
                                            height="500"
                                            type="column3d"
                                            dataSource={myDataSource}
                                            fcLibrary={FusionCharts} // Provide FusionCharts library
                                        />
                                    </div>
                                </Col>
                            </Row>

                        </Grid>
                        <div className="bord">
                            <div className="border-white-left"></div>
                            <a className='arrow'></a>
                            <a className='arrow2'></a>
                            <a href="#next" className='arr'></a>
                            <div className="border-white-right"></div>
                        </div>

                        <div id="next"></div>
                    </div>
                ) : (
                    alert('Please create your account or login'),
                        window.location.href = 'http://localhost:3000/login/')}
            </div>

        );
    }
}

export default Wallet;
