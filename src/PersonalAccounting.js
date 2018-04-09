import React, {Component} from 'react';
import './style.css';
import Registration from "./components/registration/Registration";

class PersonalAccounting extends Component {


    render() {
        return (
            <div className="wallet-app">
                <Registration/>
                <div id="pause-trigger"></div>
                <div id="pause-root">
                    <div className="screen red-bg">
                        <div className="row">
                            <div className="about-us ">
                                <div
                                    className="advantage-1 triangles-homepage pure-u-1 pure-u-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="thumbnail option-1">
                                        <a href='http://localhost:3000/wallet/'>
                                            <img src={require('./img/graph-3.svg')} alt="Check incomes"/>
                                        </a>
                                        <div className="descr">
                                            Check incomes
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="advantage-2 triangles-homepage pure-u-1 pure-u-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="thumbnail">
                                        <img src={require('./img/time-is-money-2.svg')} alt="Control expense"/>
                                        <div className="descr">
                                            Control expense
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="advantage-3 triangles-homepage pure-u-1 pure-u-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="thumbnail">
                                        <img src={require('./img/presentation-13.svg')} alt="Plan profits"/>
                                        <div className="descr">
                                            Plan profits
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalAccounting;
