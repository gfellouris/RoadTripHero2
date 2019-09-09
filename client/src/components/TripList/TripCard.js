import React from 'react';
import { Card, CardTitle, Button, CardHeader, CardFooter, CardBody,
  CardText } from 'reactstrap';

const TripCard = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Trip Name: {props.tripName}</CardHeader>
        <CardBody>
          <CardTitle>Overall Safety Rating: </CardTitle>
          <CardText>Origin: {props.origin}
          
          </CardText>
          <CardText>Destination: {props.destination}
          
          </CardText>
          <CardText>number of stops: {props.numberOfStops}</CardText>
          <Button>Go to Map</Button>
        </CardBody>
        <CardFooter><i className="fa fa-trash" onClick={() => props.handleDeleteTrip(props.id)} id={props.id} style={{ fontSize: "30px" }} />Delete Trip </CardFooter>
      </Card>
    </div>
  );
};

export default TripCard;