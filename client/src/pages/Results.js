
import React, { Component } from "react";
// import AuthUserContext from '../components/Session/context';
import { withAuthorization } from '../components/Session/index';
import { Col, Row, Container } from "../components/Grid/index.js";
import Header from '../components/Header/Header.js'
import Navbar from '../components/Navbar/index.js'
import MapLeaf from '../components/Map/MapLeaf'
import LeafletMap from '../components/Directions/LeafletMap';
import './results.css'
import TripCard from "../components/TripList/TripCard";
import API from "../components/Utility/API";


import "../pages/planner.css"

class Results extends Component {
  

state = {
    savedTrips: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.loadTrips(this.props.user);

    }
  }

  loadTrips = user => {
    API.getTrips(user)
      .then(res => {
        console.log(res.data);
        this.setState({ savedTrips: res.data });
      })
      .catch(err => console.log(err));
  };

  handleDeleteTrip = id =>{
    

    API.removeTrip(id)
      .then(res =>{
        console.log(res.data);
        this.loadTrips(this.props.user)
      })
      .catch(err => console.log(err));
  }


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
                    <LeafletMap/>
                    </Col>
                    <Col size="md-5" >
                    
                   <TripCard/>
                    </Col>
                  </Row>
                    
                    
                </Container>
            </>
        )
    }
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Results);
