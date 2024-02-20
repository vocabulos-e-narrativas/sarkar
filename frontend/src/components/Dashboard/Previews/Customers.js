import React from "react";
import { Col, Row } from "react-bootstrap";

import Info from "../../../images/dashboard/info.png";

export default function Customers() {
    return (
        <>
            <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                <Row>
                    <Col md={10}>
                        Customers
                    </Col>
                    <Col md={1} className="">
                        <img src={Info} className="settingsImage pointer pl-3" alt="" />
                    </Col>
                </Row>
            </p>
            <h4 className="text-center py-5 my-5">Under Construction</h4>
        </>
    );
};