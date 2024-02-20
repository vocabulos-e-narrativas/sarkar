import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-76.png";

import { useNavigate } from 'react-router-dom';

export default function NarrativaB() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <Container className="narrativas py-5">
                    <Row className="py-5">
                        <Col md={4} />
                        <Col md={8}>
                            <h1 className="my-5">Presentation B</h1>
                            <p>
                                Hello, I'm João and I want you to buy the DroneClip drone. You don't need to see how it works, just trust me when I say that it allows you to do everything you imagine a drone could do. I hope you like the product because it's the best solution, just ask those who have already bought it!
                            </p>
                            <Row className="narrativas-btns-2">
                                <Col md={3} />
                                <Col>
                                    <Button className="bg-orange pointer" onClick={() => navigate('../phases/pitch/estudio1/narrativaA')}>Back</Button>
                                </Col>
                                <Col>
                                    <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/narrativaC')}>Continue</Button>
                                </Col>
                                <Col md={4} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}