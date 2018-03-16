// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import PersonalAccounting from './PersonalAccounting';
// import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { Route } from 'react-router';
// import { Link } from 'react-router-dom';
// // import Login from './components/registration/Login';
// import Registration from './components/registration/Registration';
// import { Grid, Row, Col } from 'react-bootstrap';
// // import Authorization from './components/registration/Authorization';
// import rootReduser from './reducers';
// import { push } from 'react-router-redux';
//
// const middleware = routerMiddleware(history)
//
// export const store = createStore(
//     rootReduser,
//     applyMiddleware(middleware)
// )
//
//
// const history = createHistory()
//
// function Logout(){
//     localStorage.clear();
//
//     store.dispatch(push('/authorization'))
// }
// export const Navigation = () => {
//
//     return (
//         <Grid>
//             <Row className="show-grid">
//                 <Col md={4} lg={3} sm={12} xs={12}>
//                     <div className="menu">
//                         <nav className="nav center">
//                             <ul>
//                                 <li><Link to={`/`} className="active">Walk routes</Link></li>
//                                 <li><Link to={`/users/${localStorage.getItem('id')}`} className="">My account</Link></li>
//                                 <li><Link to={`/registration/`} className="">Registration</Link></li>
//                                 { localStorage.getItem('id') ? (
//                                     <li><a to={`/logout/`} onClick={Logout} className="">Logout</a></li>
//                                 ): (
//                                     <li><Link to={`/authorization/`} className="">Login</Link></li>
//                                 ) }
//                             </ul>
//                         </nav>
//                     </div>
//                 </Col>
//             </Row>
//         </Grid>
//     )
// };
//
// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <Route exact path="/" component={PersonalAccounting}/>
//                 {/*<Route exact path="/users/:id" component={Users}/>*/}
//                 <Route exact path="/registration" component={Registration}/>
//                 <Route exact path="/authorization" component={Authorization}/>
//
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//
//     document.getElementById('main')
//
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonalAccounting from './PersonalAccounting';
import Login from './components/registration/Login';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Registration from './components/registration/Registration';
import { Grid, Row, Col } from 'react-bootstrap';
import rootReduser from './reducers';
import { push } from 'react-router-redux';

const middleware = routerMiddleware(history);

export const store = createStore(
    rootReduser,
    applyMiddleware(middleware)
);


const history = createHistory();

function Logout(){
    localStorage.clear();

    store.dispatch(push('/authorization'))
}
export const Navigation = () => {

    return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12} lg={12} sm={12} xs={12} className="menu-block">
                        <div className="menu">
                            <nav className="nav center">
                                <ul>
                                    {/*<li className="menu-li"><Link to={`/`} className="active">Personal Accounting</Link></li>*/}
                                    {/*<li><Link to={`/users/${localStorage.getItem('id')}`} className="">My account</Link></li>*/}
                                    <li className="menu-li"><Link to={`/`} className="">Registration</Link></li>
                                    { localStorage.getItem('id') ? (
                                    <li className="menu-li"><Link to={`/logout/`} onClick={Logout} className="">Logout</Link></li>
                                    ): (
                                    <li className="menu-li"><Link to={`/login/`} className="">Login</Link></li>
                                    ) }
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Grid>
    )
};

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={PersonalAccounting}/>
                {/*<Route exact path="/users/:id" component={Users}/>*/}
                <Route exact path="/" component={Registration}/>
                <Route exact path="/login" component={Login}/>

            </div>
        </ConnectedRouter>
    </Provider>,

    document.getElementById('main')

);