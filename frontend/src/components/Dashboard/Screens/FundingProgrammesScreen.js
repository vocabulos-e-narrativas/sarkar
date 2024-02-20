import React, { useState } from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import User from "../User";

import Search from "../../../images/dashboard/search.png";

import { planData } from "../../../constants/FundingProgrammesScreen";

export default function FundingProgrammesScreen(props) {

    const [selectedLiIndex, setSelectedLiIndex] = useState(0);
    const [selectedText, setSelectedText] = useState(planData[0].text);
    const [selectedTitle, setSelectedTitle] = useState(planData[0].title);
    const [selectedLogo, setSelectedLogo] = useState(planData[0].logo);

    const handleLiClick = (title, index) => {
        setSelectedLiIndex(index);
        setSelectedTitle(title);
        setSelectedText(planData[index].text);
        setSelectedLogo(planData[index].logo);
    };

    return (
        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-gray-widgets m-2 p-2">
                    <Container>
                        <Row className="pt-2 pb-3 border-light-gray-bottom">
                            <User image={props.image} name={props.name} idea={props.idea} action={props.action} />
                        </Row>
                        <Row className="px-2 pt-4">
                            <p>Programmes</p>
                        </Row>
                        <Row className="px-4">
                            <div
                                className="pr-17"
                                style={{ maxHeight: "400px", overflowY: "auto" }}
                            >
                                <ul>
                                    {planData.map((data, index) => (
                                        <li
                                            key={index}
                                            className={`my-4 ${index === selectedLiIndex ? "pointer text-orange" : "pointer"}`}
                                            onClick={() => handleLiClick(data.title, index)}
                                        >
                                            {data.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </Row>
                <Row className="dashboard-user-notifications-gray-widgets mt-4 m-2">
                    <Container>
                        <Row className="">
                            <Col md={4} className="text-right py-3">
                                <img src={Search} className="w-50 my-2" alt="" />
                            </Col>
                            <Col md={7} className="text-left pt-4">
                                <h4 className="pt-3">Programme Website</h4>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Col >
            <Col md={8} className="dashboard-panel">
                <Container className="business-plan my-2 p-2">
                    <p className="px-2 pt-2 pb-1 border-light-gray-bottom">Programmes</p>
                    <Row className="py-4">
                        <Col>
                            <h1 className="px-4 py-4">
                                <strong>{selectedTitle}</strong>
                            </h1>
                        </Col>
                        <Col className="text-right mr-5">
                            <img src={selectedLogo} className="w-50" alt="" />
                        </Col>
                    </Row>
                    <div
                        className="px-5 mr-3 pt-2 pb-1"
                        style={{ maxHeight: "500px", overflowY: "auto" }}
                    >
                        <p className="px-4 pt-2 pb-1">
                            {selectedText.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </Container>
            </Col>
        </Row >
    );
};


