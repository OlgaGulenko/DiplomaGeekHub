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
          <div className="about-us ">
              <div className="advantage-1 pure-u-1 pure-u-lg-1-5">
                  <div className="thumbnail">
                      <img src={ require('./img/money.svg')} alt="Check incomes"/>
                      <div>
                          Check incomes
                      </div>
                  </div>
              </div>
              <div className="advantage-2 pure-u-1 pure-u-lg-1-5">
                  <div className="thumbnail">
                      <img src={ require('./img/clipboard.svg')} alt="Control expense"/>
                      <div>
                          Control expense
                      </div>
                  </div>
              </div>
              <div className="advantage-3 pure-u-1 pure-u-lg-1-5">
                  <div className="thumbnail">
                      <img src={ require('./img/bar-chart.svg')} alt="Plan profits"/>
                      <div>
                          Plan profits
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default PersonalAccounting;
