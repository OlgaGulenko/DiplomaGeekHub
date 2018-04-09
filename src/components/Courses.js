import React, { Component } from 'react';
import { Button, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl, MenuItem, SplitButton, DropdownButton, NavDropdown, Nav, Navbar, Modal, Jumbotron,  NavItem} from 'react-bootstrap';
class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "txt":'',
            "rate":'',
            "cc":'',
            "exchangedate":'',
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(date) {
        this.setState({
            date: date
        });
    };
    GetCourses(){
        let url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
        fetch(url,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'mode': 'no-cors',
                'Access-Control-Allow-Origin' : 'http://localhost:3000/',

            }
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                this.setState ({
                    course: response
                });
                if (response !== '') {

                    localStorage.setItem('txt', response.course.txt);
                    localStorage.setItem('rate', response.course.rate);
                    localStorage.setItem('cc', response.course.cc);
                    localStorage.setItem('exchangedate', response.course.exchangedate);
                }
                else {
                    alert("refresh window")
                }
            });


    }

    render() {
        return (
            <ButtonToolbar className="btn-registration">
                <Button bsSize="sm" onClick={this.GetCourses.bind(this)}> </Button>
            </ButtonToolbar>
        );
    }
}
export default Courses;