import React, { Component } from "react";
import Form from "../components/Forms/Forms.js";
import { Col, Row, Container } from "../components/Grid/index.js";
import GlobalContext from '../context/'

class Planner extends Component {

    static contextType = GlobalContext

    render() {
        return (
            <Container fluid>
                <h1>{JSON.stringify(this.context.user)}</h1>
                <Row >
                    <Col size="md-6" >
                        <Form >

                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Planner;