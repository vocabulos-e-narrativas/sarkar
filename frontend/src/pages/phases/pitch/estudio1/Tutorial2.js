import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

import { useNavigate } from 'react-router-dom';

import e1 from "../../../../images/materialpisopitch/material_separado_pitch-33.png";
import e2 from "../../../../images/materialpisopitch/material_separado_pitch-34.png";
import e3 from "../../../../images/materialpisopitch/material_separado_pitch-35.png";
import e4 from "../../../../images/materialpisopitch/material_separado_pitch-36.png";
import e5 from "../../../../images/materialpisopitch/material_separado_pitch-37.png";

export default function Tutorial2() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        <h2>What is a good pitch?</h2>
                        <p className="mt-4">
                            A good pitch is able to captivate and interest the potential investors it is aimed at. To achieve that, it should have some characteristics, such as:
                        </p>
                    </Container>
                    <Container className="bom-pitch mx-25 text-center py-5">
                        <Row>
                            <Col md={2} className="">
                                <img src={e1} className="my-4" alt="" />
                                <p>Being concise</p>
                            </Col>
                            <Col md={2} className="">
                                <img src={e2} className="my-4" alt="" />
                                <p>
                                    Using clear and<br /> simple language
                                </p>
                            </Col>
                            <Col md={2} className="">
                                <img src={e3} className="my-4" alt="" />
                                <p>
                                    Focusing on <br />the solution
                                </p>
                            </Col>
                            <Col md={2} className="">
                                <img src={e4} className="my-4" alt="" />
                                <p>
                                    Telling a <br />compelling story
                                </p>
                            </Col>
                            <Col md={2} className="">
                                <img src={e5} className="my-4" alt="" />
                                <p>
                                    Including the most <br />important ideas
                                </p>
                            </Col>
                        </Row>
                        <Row className="px-3 py-5 mx-25">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/challenge1')}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}