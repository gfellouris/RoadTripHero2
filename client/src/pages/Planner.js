import React, { Component } from "react";
import Form from "../components/Forms/Forms.js";
import { Col, Row, Container } from "../components/Grid/index.js";
import GlobalContext from '../context/'
import "../pages/planner.css"

class Planner extends Component {

    static contextType = GlobalContext

    render() {
        console.log(this.context.user.uid)
        return (
            <>
            <Container fluid>
                <h1>{JSON.stringify(this.context.user)}</h1>
                
                <Row >
                    <Col size="md-6" >
                        <Form >
                        </Form>
                    </Col>
                </Row>
            </Container>
            </>
            // <Container fluid>
            //     <Row >
            //         <Col size="md-6">
                        
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
};

export default Planner;