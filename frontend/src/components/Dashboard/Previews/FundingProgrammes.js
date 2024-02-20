import React from "react";
import { Col, Row } from "react-bootstrap";

import Info from "../../../images/dashboard/info.png";

import AcreditaPortugal from "../../../images/dashboard/AcreditaPortugal.png";
import StartUPVoucher from "../../../images/dashboard/StartUPVoucher.png";
import Dollar from "../../../images/dashboard/Dollar.png";

export default function FundingProgrammes() {
    return (
        <>
            <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                <Row>
                    <Col md={10}>
                        Funding Programmes
                    </Col>
                    <Col md={1} className="">
                        <img src={Info} className="settingsImage pointer pl-3" alt="" />
                    </Col>
                </Row>
            </p>
            <Row className="funding-programmes">
                <Col>
                    <Row className="w-75 border-dark-gray-bottom fundingProgrammesPreview-image-1">
                        <img src={StartUPVoucher} className="mb-3 ml-3" alt="" />
                    </Row>
                    <Row className="fundingProgrammesPreview-image-2">
                        <img src={AcreditaPortugal} className="" alt="" />
                    </Row>
                </Col>
                <Col className="fundingProgrammesPreview-dollar">
                    <img src={Dollar} className="" alt="" />
                </Col>
            </Row>
        </>
    );
};