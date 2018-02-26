import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalAccounting from './PersonalAccounting';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
// import Users from './components/registration/Users';
import Registration from './components/registration/Registration';
import { Grid, Row, Col } from 'react-bootstrap';
// import Authorization from './components/registration/Authorization';
import rootReduser from './reducers';
import { push } from 'react-router-redux';
//
//
const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    rootReduser,
    applyMiddleware(middleware)
);
// function Logout(){
//     localStorage.clear();
//
//     store.dispatch(push('/login'))
// }
export const Navigation = () => {

    return (
        <Grid>
            <Row className="show-grid">
                <Col md={4} lg={3} sm={12} xs={12}>
                    <div className="menu">
                        <nav className="nav center">
                            <ul>
                                <li><Link to={`/`} className="active">PersonalAccounting</Link></li>
                                {/*<li><Link to={`/users/${localStorage.getItem('id')}`} className="">My account</Link></li>*/}
                                <li><Link to={`/registration/`} className="">Registration</Link></li>
                                {/*{ localStorage.getItem('id') ? (*/}
                                    {/*<li><a to={`/logout/`} onClick={Logout} className="">Logout</a></li>*/}
                                {/*): (*/}
                                    {/*<li><Link to={`/authorization/`} className="">Login</Link></li>*/}
                                {/*) }*/}
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
};
//
ReactDOM.render(
  
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/" component={PersonalAccounting}/>
                {/*<Route exact path="/users/:id" component={Users}/>*/}

                {/*<Route exact path="/authorization" component={Authorization}/>*/}

            </div>
        </ConnectedRouter>
    </Provider>,

    document.getElementById('main')
);
