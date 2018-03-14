// import React, { Component } from 'react';
// import { Button, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';
// import { Navigation } from '../../index';
// class Wallet extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         };
//
//     }
//     GetWallet(){
//
//         let url ='http://gh-wallet.herokuapp.com/api/v1/wallet';
//         fetch(url,{
//             method:'get',
//             headers: {'Content-Type': 'application/json'
//             }})
//             .then(response => response.json())
//             .then(response => {
//                 this.setState ({
//                     post: response
//                 });
//             });
//     }
//
//     render() {
//         return (
//
//             <div className="container-fluid">
//                 <Navigation/>
//                 <Grid>
//                     <Row className="show-grid">
//                         <Col md={6} lg={6} sm={12} xs={12}>
//                             <div className="wallet" >
//
//                             </div>
//                         </Col>
//                     </Row>
//                 </Grid>
//             </div>
//
//         );
//     }
// }
//
// export default Wallet;
