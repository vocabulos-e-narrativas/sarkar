import React from "react";

import {
    Row,
    Col
} from "react-bootstrap";

import ProgressBar from "../../images/materialpisopitch/dashboard_progress_bar.png";

export default function CompletedChallenges({ completedChallenges }) {
    return (
        <>
            <Row className="py-2">
                <h5>Completed challenges</h5>
            </Row>
            <Row className="">
                <Col md={4} className="text-center">
                    <p className="completed-challenges">
                        <span>{completedChallenges}</span>/20
                    </p>
                </Col>
                <Col md={7} className="mt-3 progress-bar-container">
                    <img src={ProgressBar} className="progress-bar" />
                    <div style={{ width: `${completedChallenges * 5}%` }} className="progress-bar-fill"></div>
                </Col>
                <Col />
            </Row>
        </>
    );
};