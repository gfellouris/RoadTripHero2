import React, { Component } from "react";
import Form from "../components/Forms/Forms.js";
import TripList from "../components/TripList/TripList.js";
import { Col, Row, Container } from "../components/Grid/index.js";
import GlobalContext from '../context/'
import Navbar from '../components/Navbar/index.js'

import "../pages/planner.css"

class Planner extends Component {

    static contextType = GlobalContext

    render() {
        // console.log(this.GlobalContext.user.uid)
        return  (
            <>
            <Navbar/>
            <Container fluid>
                <h1>{JSON.stringify(this.context.user)}</h1>
                <Row >
                    <Col size="md-6" >
                        <Form >
                        </Form>
                    </Col>
                    <Col size="md-6">
                        <TripList> 
                        </TripList>
                    </Col>
                </Row>
            </Container>
            {/* <Container fluid>
                <Row >
                    <Col size="md-6">
                        <TripList> 
                        </TripList>
                    </Col>
                </Row>
            </Container> */}
            </>
        )
    }
};

export default Planner;