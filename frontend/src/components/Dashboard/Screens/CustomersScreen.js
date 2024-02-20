import React from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import User from "../../../components/Dashboard/User";

export default function CustomersScreen(props) {
    return (
        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-gray-widgets m-2 p-2">
                    <Container>
                        <Row className="pt-2 pb-3 border-light-gray-bottom">
                            <User image={props.image} name={props.name} idea={props.idea} action={props.action} />
                        </Row>
                    </Container>
                </Row>
                <Row className="dashboard-user-notifications-gray-widgets mt-4 m-2">
                    <Container>
                        <Row className="">
                            <Col md={4} className="text-right py-3">
                                {/*<img src={Search} className="w-50 my-2" alt="" />*/}
                            </Col>
                            <Col md={7} className="text-left pt-4">
                                <h4 className="pt-3">Under Construction</h4>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Col>
            <Col md={8} className="dashboard-panel">
                <Container className="business-plan my-2 p-2">
                    <p className="px-2 pt-2 pb-1 border-light-gray-bottom">Sample Text</p>
                    <Row className="py-4">
                        <Col>
                            <h1 className="px-4 py-4">
                                <strong>Under Construction</strong>
                            </h1>
                        </Col>
                        <Col className="text-right mr-5">
                            {/*<img src={selectedLogo} className="w-50" alt="" />*/}
                        </Col>
                    </Row>
                    <div
                        className="px-5 mr-3 pt-2 pb-1"
                        style={{ maxHeight: "500px", overflowY: "auto" }}
                    >
                        <p className="px-4 pt-2 pb-1">Under Construction</p>
                    </div>
                </Container>
            </Col>
        </Row>
    );
};


