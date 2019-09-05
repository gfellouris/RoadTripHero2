import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import "./Forms.css";

export default class Forms extends Component {
  render() {
    return (
      <Form className="tripInput">
        <Row form>
          <Col md={6}>
            <FormGroup className="name">
              <Label for="exampleTrip" className="title">Trip Name</Label>
              <Input type="text" name="tripName" id="exampleTrip" placeholder="Your Trip Name:" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleStart" className="title">Start Point</Label>
          <Input type="text" name="startPoint" id="exampleStart" placeholder="1234 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity" className="title">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState" className="title">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip" className="title">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleEnd" className="title">End Point</Label>
          <Input type="text" name="endPoint" id="exampleEnd" placeholder="4567 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity" className="title">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState" className="title">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip" className="title">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button className="submit">Save Your Trip!</Button>
      </Form>
    );
  }
}