
// import React from 'react';
// import AuthUserContext from '../components/Session/context';
// import { withAuthorization } from '../components/Session/index';
// import LeafletMap from '../components/Directions/LeafletMap';

// function Results() {
//   return (
//     <div>
//       <LeafletMap />
//     </div>
//   );
// }

// //condition for authuser check to restrict routes. If user isn't authorized, results is off limits
// const condition = authUser => !!authUser;

// export default withAuthorization(condition)(Results);

import React, { Component } from "react";
import AuthUserContext from '../components/Session/context';
import { withAuthorization } from '../components/Session/index';
import TripList from "../components/TripList/TripList.js";
import { Col, Row, Container } from "../components/Grid/index.js";
import Header from '../components/Header/Header.js'
import GlobalContext from '../context/'
import Navbar from '../components/Navbar/index.js'
import MapLeaf from '../components/Map/MapLeaf'


import "../pages/planner.css"

class Results extends Component {
    static contextType = GlobalContext

    render() {
        // console.log(this.GlobalContext.user.uid)
        return (
            <>
           <Header/>
                <Navbar />
                <Container fluid>
                  <Row>
                  <Col size="md-1" >
                    
                    
                    </Col>
                    <Col size="md-5" >
                    <MapLeaf/>
                    
                    </Col>
                    <Col size="md-5" >
                    
                   <TripList/>
                    </Col>
                  </Row>
                    
                    
                </Container>
            </>
        )
    }
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Results);
