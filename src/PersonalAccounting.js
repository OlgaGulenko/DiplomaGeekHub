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
      </div>
    );
  }
}

export default PersonalAccounting;
