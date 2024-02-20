import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual_advogados-37.png";

import { useNavigate } from 'react-router-dom';

import e1 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-24.png"; // P
import e2 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-25.png"; // luz
import e3 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-26.png"; // cc
import e4 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-27.png"; // mao
import e5 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-28.png"; // escudo

export default function Tutorial1() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img" />
            <div className="frame-container text-white">
                <Row className="p-5">
                    <Col md={4} />
                    <Col md={8}>
                        <div className="mt-5 estrutura-title ">
                            <h2 className="pt-5">Lawyer</h2>
                            <p className="mt-4">
                                There are several steps to consider in order to safeguard the rights associated with <br />your ideas and products:
                            </p>
                        </div>
                        <div className="estrutura-table m-5">
                            <Row>
                                <Col md={1} className="">
                                    <img src={e1} className="py-4" alt="" />
                                </Col>
                                <Col md={6}>
                                    <p className="py-5">
                                        Understanding what intellectual property is and what it can be applied to.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} className="">
                                    <img src={e2} className="py-4" alt="" />
                                </Col>
                                <Col md={6}>
                                    <p className="py-5">
                                        Protecting creative work.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} className="">
                                    <img src={e3} className="py-4" alt="" />
                                </Col>
                                <Col md={6}>
                                    <p className="py-5">
                                        Safeguarding identifying elements of the company or products.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} className="">
                                    <img src={e4} className="py-4" alt="" />
                                </Col>
                                <Col md={6}>
                                    <p className="py-5">
                                        Protecting inventions created within the company.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1} className="">
                                    <img src={e5} className="py-4" alt="" />
                                </Col>
                                <Col md={6}>
                                    <p className="py-5">
                                        Ensuring that what is produced belongs to the company.
                                    </p>
                                </Col>
                            </Row>
                            <Row className="py-4 mx-20">
                                <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/propriedade/estudio1/challenge1')}>Continue</Button>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}