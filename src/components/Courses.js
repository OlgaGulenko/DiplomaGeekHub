import React, { Component } from 'react';
import { Button, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl, MenuItem, SplitButton, DropdownButton, NavDropdown, Nav, Navbar, Modal, Jumbotron,  NavItem} from 'react-bootstrap';
// import { Navigation } from '../../index';

import {findDOMNode} from 'react-dom';
import moment from "moment/moment";
// import $ from 'jquery';
//
class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "ccy":'',
            "base_ccy":'',
            "buy":'',
            "sale":'',
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(date) {
        this.setState({
            date: date
        });
    };
    GetCourses(){
        // console.log(t/his.state.ccy);
        let url ='https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
        // https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11
        fetch(url,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                // 'Access'
                'Access-Control-Allow-Origin' : 'http://localhost:3000/',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'


            }})
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                this.setState ({
                    course: response
                });
                if (response !== '') {

                    localStorage.setItem('ccy', response.course.ccy);
                    localStorage.setItem('base_ccy', response.course.base_ccy);
                    localStorage.setItem('buy', response.course.buy);
                    localStorage.setItem('sale', response.course.sale);
                }
                else {
                    alert("refresh window")
                }
            });


    }

    render() {
        return (
            <ButtonToolbar className="btn-registration">
                <Button bsSize="sm" onClick={this.GetCourses.bind(this)}>Add income</Button>
            </ButtonToolbar>
        );
    }
}
export default Courses;