import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const TripCard = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Trip Name: {props.tripName}</CardHeader>
        <CardBody>
          {/* <CardTitle>Overall Safety Rating: ????</CardTitle> */}
          <CardText>Origin: {props.origin}
          
          </CardText>
          <CardText>Destination: {props.destination}
          
          </CardText>
          
          <Button>Go to Map</Button>
        </CardBody>
        <CardFooter>number of stops: ???</CardFooter>
      </Card>
    </div>
  );
};

export default TripCard;