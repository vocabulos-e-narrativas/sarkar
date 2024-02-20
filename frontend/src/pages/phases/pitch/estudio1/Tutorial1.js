import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

import { useNavigate } from 'react-router-dom';

import e1 from "../../../../images/materialpisopitch/material_separado_pitch-23.png";
import e2 from "../../../../images/materialpisopitch/material_separado_pitch-24.png";
import e3 from "../../../../images/materialpisopitch/material_separado_pitch-25.png";
import e4 from "../../../../images/materialpisopitch/material_separado_pitch-26.png";
import e5 from "../../../../images/materialpisopitch/material_separado_pitch-27.png";

export default function Tutorial1() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img" />
            <div className="frame-container text-white">
                <div className="p-5">
                    <Container className="mt-5 estrutura-title ">
                        <h2 className="pt-5">Pitch Structure</h2>
                        <p className="mt-4">
                            A pitch is a concise presentation often used by those who want to introduce
                            a business idea to potential investors or interested parties.
                            This presentation can have a variable structure. Here is an example with 5 steps:
                        </p>
                    </Container>
                    <Container className="estrutura-table mx-35 my-5">
                        <Row>
                            <Col md={1} className="">
                                <img src={e1} className="my-4" alt="" />
                            </Col>
                            <Col md={6}>
                                <p>
                                    1. Introduction (In this step, you should introduce yourself. If you are representing a company, you can mention your role.)
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1} className="">
                                <img src={e2} className="my-4" alt="" />
                            </Col>
                            <Col md={6}>
                                <p>
                                    2. Problem Identification (At this point, you should mention the problem you identified that led to the development of your business idea.)
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1} className="">
                                <img src={e3} className="my-4" alt="" />
                            </Col>
                            <Col md={6}>
                                <p>
                                    3. Solution (In a very concise and clear manner, you should present your solution. If possible, try to summarize your idea in one or two sentences. It is preferable to use a strong visual component.)
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1} className="">
                                <img src={e4} className="my-4" alt="" />
                            </Col>
                            <Col md={6}>
                                <p>
                                    4. Value Proposition (In this step, you explain what your solution adds to the existing reality. You can enumerate your direct and indirect competitors to demonstrate how your idea differentiates itself positively in the market.)
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1} className="">
                                <img src={e5} className="my-4" alt="" />
                            </Col>
                            <Col md={6}>
                                <p>
                                    5. Interest Assessment (Concluding your pitch, express your willingness to schedule future meetings with potential investors who show interest.)
                                </p>
                            </Col>
                        </Row>
                        <Row className="py-4 mx-20">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/tutorial2')}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}