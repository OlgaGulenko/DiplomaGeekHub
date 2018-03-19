import React, { Component } from 'react';
import './style.css';
import Animation from './components/Animation';
import Authorization from "./components/registration/Login";
// import { store } from './index';
// import { Link } from 'react-router-dom';
import Registration from "./components/registration/Registration";
// import { Navigation } from '../index';
class PersonalAccounting extends Component {




  render() {
    return (
      <div className="wallet-app">

          {/*<Animation/>*/}
          {/*<Authorization/>*/}
          <Registration/>
          <div id="pause-trigger"></div>
          <div id="pause-root">
              <div className="screen red-bg" id="red-screen">
                  <div className="row">
                      <div className="about-us pure-g">
                          <div className="advantage-1 pure-u-1 pure-u-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <div className="thumbnail">
                                  <a href='http://localhost:3000/wallet/'>
                                    <img src={ require('./img/graph-3.svg')} alt="Check incomes"/>
                                  </a>
                                  <div className="descr">
                                      Check incomes
                                  </div>
                              </div>
                          </div>
                          <div className="advantage-2 pure-u-1 pure-u-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <div className="thumbnail">
                                  <img src={ require('./img/time-is-money-2.svg')} alt="Control expense"/>
                                  <div  className="descr">
                                      Control expense
                                  </div>
                              </div>
                          </div>
                          <div className="advantage-3 pure-u-1 pure-u-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              <div className="thumbnail">
                                  <img src={ require('./img/presentation-13.svg')} alt="Plan profits"/>
                                  <div  className="descr">
                                      Plan profits
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="screen yellow-bg" data-screen>

                  <div className="device-screen-anchor">

                  </div>
                  <div className="device-block">

                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default PersonalAccounting;
