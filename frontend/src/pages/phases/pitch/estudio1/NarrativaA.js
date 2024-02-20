import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-75.png";

import { useNavigate } from 'react-router-dom';

export default function NarrativaA() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <Container className="narrativas py-5">
                    <Row className="py-5">
                        <Col md={4} />
                        <Col md={8}>
                            <h1 className="my-5">Presentation A</h1>
                            <p>
                                Hello, I'm João and I'm here to talk to you about the best drones ever built. Our LOX and UAS technologies don't exist in any other product, military or commercial. With the DroneClip drone, you will be able to fly with your own robot equipped with cutting tools - they can even cut hair if you want!
                            </p>
                            <Row className="narrativas-btns-1">
                                <Col md={3} />
                                <Col>
                                    <Button className="bg-orange pointer" onClick={() => navigate('../phases/pitch/estudio1/tutorial3')}>Back</Button>
                                </Col>
                                <Col>
                                    <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/narrativaB')}>Continue</Button>
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