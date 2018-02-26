import React, { Component } from 'react';
import './style.css';
import Animation from './components/Animation';
import Authorization from "./components/registration/Login";
// import { store } from './index';
// import { Link } from 'react-router-dom';
import Registration from "./components/registration/Registration";
class PersonalAccounting extends Component {




  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to your personal accounting manager</h1>
        </header>
          {/*<Animation/>*/}
          {/*<Authorization/>*/}
          <Registration/>
      </div>
    );
  }
}

export default PersonalAccounting;
