import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

export default class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="12">
                            <h5 className="title">FTS</h5>
                            <p>
                                Customer must give consent before starting Questionnaire.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.forensic-testing.co.uk"> Forensic Testing Services Ltd.</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}
