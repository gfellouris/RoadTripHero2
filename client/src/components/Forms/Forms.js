import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import "./Forms.css";
import API from '../Utility/API';


export default class Forms extends Component {
  state ={
    exampleTrip: "",
    exampleStart: "",
    exampleCity: "",
    exampleState: "",
    exampleZip: 0,
    exampleEnd: "",
    exampleEndCity: "",
    exampleEndState: "",
    exampleEndZip: 0,
  };

  handleInputChange = event => {
    const {name,value} = event.target;

    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      exampleTrip: "",
      exampleStart: "",
      exampleCity: "",
      exampleState: "",
      exampleZip: "",
      exampleEnd: "",
      exampleEndCity: "",
      exampleEndState: "",
      exampleEndZip: ""
    });
  };
  postTrips = user => {
    API.saveTrips(user)
    .then(res => {
      this.setState()
    })
  }

  render() {
    return (
      <Form className="tripInput">
        <h1>Plan Your Trip Here!</h1>
        <Row form>
          <Col md={6}>
            <FormGroup className="name">
              <Label for="exampleTrip" className="title">Trip Name</Label>
              <Input type="text" name="tripName" id="exampleTrip" placeholder="Your Trip Name:" 
              value={this.state.exampleTrip}
              onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleStart" className="title">Start Point</Label>
          <Input type="text" name="startPoint" id="exampleStart" placeholder="1234 Main St"
          value={this.state.exampleStart}
          onChange={this.handleInputChange}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity" className="title">City</Label>
              <Input type="text" name="city" id="exampleCity"
              value={this.state.exampleCity}
              onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleState" className="title">State</Label>
              <Input type="text" name="state" id="exampleState"
              value={this.state.exampleState}
              onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleZip" className="title">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"
              value={this.state.exampleZip}
              onChange={this.handleInputChange}/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleEnd" className="title">End Point</Label>
          <Input type="text" name="endPoint" id="exampleEnd" placeholder="4567 Main St"
          value={this.state.exampleEnd}
          onChange={this.handleInputChange}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEndCity" className="title">City</Label>
              <Input type="text" name="city" id="exampleCity"
              value={this.state.exampleEndCity}
              onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleEndState" className="title">State</Label>
              <Input type="text" name="state" id="exampleState"
              value={this.state.exampleEndState}
              onChange={this.handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleEndZip" className="title">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"
              value={this.state.exampleEndZip}
              onChange={this.handleInputChange}/>
            </FormGroup>  
          </Col>
        </Row>

        <Button className="submit"onClick={this.handleFormSubmit}>Save Your Trip!</Button>
      </Form>
    );
  }
}