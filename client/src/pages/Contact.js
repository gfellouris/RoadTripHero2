import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";
import "./contact.css";
// import AuthUserContext from '../components/Session/context';
import { withAuthorization } from "../components/Session/index";

import Header from "../components/Header/Header.js";
import Navbar from "../components/Navbar/index.js";

import "../pages/planner.css";

class Results extends Component {
  render() {
    // console.log(this.GlobalContext.user.uid)
    return (
      <>
        <Header />
        <Navbar />
        <Container fluid>
          <Row>
            {/* <Col size="md-1"></Col> */}
            <Col size="md-8">
              <Form className="contactInput" onSubmit={this.handleSubmit}>
                <h1>Contact Us Here!</h1>
                <Row form>
                  <Col md={6}>
                    <FormGroup className="name">
                      <Label for="namelabel" className="title">
                        Your Name
                      </Label>

                      <Input
                        type="text"
                        name="userName"
                        onChange={this.handleInputChange}
                        id="userNameForm"
                        placeholder="Your Name:"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup className="email">
                      <Label for="emaillabel" className="title">
                        Your email
                      </Label>

                      <Input
                        type="text"
                        name="userName"
                        onChange={this.handleInputChange}
                        id="userNameForm"
                        placeholder="Your Name:"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="userComment" className="title">
                    comments
                  </Label>

                  <Input
                    type="text"
                    name="userComment"
                    onChange={this.handleInputChange}
                    id="userCommentFormID"
                    placeholder="Road Trip Hero is Amazing"
                  />
                </FormGroup>
               
               
                <Button className="submit">Send Comment!</Button>
              </Form>
              ); }
            </Col>
          </Row>
        </Container>
      </>
    )
  };
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Results);
