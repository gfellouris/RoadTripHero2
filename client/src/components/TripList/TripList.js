import React from 'react';
import TripCard from "./TripCard.js";
import Forms from '../Forms/Forms'
import { Col, Row} from "../Grid/index";
import API from "../Utility/API.js";

export default class TripList extends React.Component {

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

    console.log(this.state.savedTrips);
    return (
      <Row >
        <Col size="md-1" >
        </Col>
        <Col size="md-6" >
          <Forms savedTrips={this.savedTrips} loadTrips={this.loadTrips} user={this.props.user} />
        </Col>
        <Col size="md-5">
          {this.state.savedTrips.map(savedTrips => (
            <TripCard
              id={savedTrips.id}
              tripName={savedTrips.tripName}
              origin={savedTrips.origin}
              destination={savedTrips.destination}
              numberOfStops={savedTrips.numberOfStops}
              handleDeleteTrip={this.handleDeleteTrip}
            />
          ))}
        </Col>
      </Row>
    );
  }
}
