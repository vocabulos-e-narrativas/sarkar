import React from "react";
import { Col, Row } from "react-bootstrap";

import Info from "../../../images/dashboard/info.png";

export default function BusinessPlan({ completedSteps }) {
    return (
        <>
            <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                <Row>
                    <Col md={10}>
                        Business Plan
                    </Col>
                    <Col md={1} className="">
                        <img src={Info} className="settingsImage pointer pl-3" alt="" />
                    </Col>
                </Row>
            </p>
            <p className="text-center completed-steps my-4">
                <span>{completedSteps}</span>/9
            </p>
            <p className="text-dark-white mx-3">Concluded Steps</p>
        </>
    );
};