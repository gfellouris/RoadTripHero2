import React, { Component } from 'react';
import TripList from '../components/TripList/TripList.js';
import { Col, Row, Container } from '../components/Grid/index.js';
import AuthUserContext from '../components/Session/context';
import { withAuthorization } from '../components/Session/index';
import Header from '../components/Header/Header.js';
import GlobalContext from '../context/';
import Navbar from '../components/Navbar/index.js';

import '../pages/planner.css';

class Planner extends Component {
  static contextType = GlobalContext;

  render() {
    // console.log(this.GlobalContext.user.uid)
    return (
      <>
        <Header />
        <Navbar />
        <Container fluid>
          <TripList user={this.context.user}></TripList>
        </Container>
      </>
    );
  }
}

//condition for authuser check to restrict routes. If user isn't authorized, planner is off limits
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Planner);