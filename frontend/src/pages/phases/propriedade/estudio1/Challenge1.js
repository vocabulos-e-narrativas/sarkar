import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual_advogados-38.png";

import { useNavigate } from 'react-router-dom';

import e1 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-30.png"; // P
import e2 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-29.png"; // luz

import Decree from "../../../../docs/DECLARAÇÃO DE PROPRIEDADE INTELECTUAL.pdf";

export default function Challenge1() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img" />
            <Container>
                <div className="py-5 frame-container text-white">
                    <div className="mt-5 estrutura-title ">
                        <h3 className="pt-5">What is intellectual property and what can it be applied to?</h3>
                        <p className="mt-4">
                            Intellectual property comprises the rights and responsibilities associated with human production of creative content,
                            and it encompasses two areas:
                        </p>
                    </div>
                    <div className="estrutura-table p-5">
                        <Row className="pt-5">
                            <Col md={2} />
                            <Col md={2} className="text-center">
                                <img src={e1} className="m-4" alt="" />
                                <span>
                                    Copyright
                                </span>
                            </Col>
                            <Col md={6}>
                                <p className="py-5">
                                    Protection of intellectual and artistic creations and defining sharing and usage rights.<br /><br />
                                    <a
                                        href={Decree}
                                        download="DECLARAÇÃO DE PROPRIEDADE INTELECTUAL"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="">Decree-Law No. 63/85, dated March 14th.</a>
                                </p>
                            </Col>
                            <Col md={2} />
                        </Row>
                        <Row>
                            <Col md={2} />
                            <Col md={2} className="text-center">
                                <img src={e2} className="m-4" alt="" />
                                <span>
                                    Industrial<br /> Property
                                </span>
                            </Col>
                            <Col md={6}>
                                <p className="py-5">
                                    Protection of the company's brand, patents, industrial designs, and others.<br /><br />
                                    <a href="https://justica.gov.pt/Registos/Propriedade-Industrial" className="">
                                        https://justica.gov.pt/Registos/Propriedade-Industrial
                                    </a>
                                </p>
                            </Col>
                            <Col md={2} />
                        </Row>
                        <Row className="py-5 mx-25">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/propriedade/estudio1/quizz1')}>Go to challenge</Button>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
}