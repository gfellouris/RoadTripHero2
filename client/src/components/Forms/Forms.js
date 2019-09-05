import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Forms extends Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleTrip">Trip Name</Label>
              <Input type="text" name="tripName" id="exampleTrip" placeholder="Your Trip Name:" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleStart">Start Point</Label>
          <Input type="text" name="startPoint" id="exampleStart" placeholder="1234 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleEnd">End Point</Label>
          <Input type="text" name="endPoint" id="exampleEnd" placeholder="4567 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        
        <Button>Save Your Trip!</Button>
      </Form>
    );
  }
}