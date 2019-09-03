import React, { Component } from "react";
import SignUp from "../components/SignUp";
import GlobalContext from '../context';
import {Container, Row, Col } from 'reactstrap';
import './landing.css';

class Landing extends Component {

static contextType = GlobalContext 
  state = {};

  render() {
    return (
      <Container>
        <Row>
        <Col>
        <h1>oad Trip Hero</h1>
        
        <h1>{this.context.email}</h1>
        <SignUp/>
        </Col>
        </Row>
        </Container>
    );
  }
}

export default Landing;
