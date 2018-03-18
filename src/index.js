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
import Login from './components/registration/Login';
import Registration from './components/registration/Registration';
import Wallet from './components/wallet/Wallet';
import { Grid, Row, Col } from 'react-bootstrap';
// import Authorization from './components/registration/Authorization';
import rootReduser from './reducers';
import { push } from 'react-router-redux';


const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    rootReduser,
    applyMiddleware(middleware)
);
function Logout(){
    localStorage.clear();

    store.dispatch(push('/login'))
}
export const Navigation = () => {

    return (
        <header className="header">
            <Grid>
                <Row className="show-grid">
                    <Col md={12} lg={12} sm={12} xs={12}>
                        <div className="menu">
                            <nav className="nav center">
                                <ul className="menu-ul">
                                    <li><Link to={`/`} className="active">PersonalAccounting</Link></li>
                                    <li><Link to={`/wallet/:api_key`} className="active">Wallet</Link></li>
                                    <li><Link to={`/registration/`} className="">Registration</Link></li>
                                    {/*<li><Link to={`/users/${localStorage.getItem('id')}`} className="">My account</Link></li>*/}
                                    { localStorage.getItem('api_key') ? (
                                        <li><a to={`/logout/`} onClick={Logout} className="">Logout</a></li>
                                    ): (
                                        <li><Link to={`/login/`} className="">Login</Link></li>
                                    ) }
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
};

ReactDOM.render(

    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/" component={PersonalAccounting}/>
                {/*<Route exact path="/users/:api_key" component={Users}/>*/}
                <Route exact path="/wallet/:api_key" component={Wallet}/>
                <Route exact path="/login" component={Login}/>

            </div>
        </ConnectedRouter>
    </Provider>,

    document.getElementById('main')
);
