import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-77.png";

import { useNavigate } from 'react-router-dom';

export default function NarrativaC() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <Container className="narrativas py-5">
                    <Row className="py-5">
                        <Col md={4} />
                        <Col md={8} className="h-100">
                            <h1 className="my-5">Presentation  C</h1>
                            <p>
                                Farmers often struggle with manually managing the dispersion of freely roaming livestock. The DroneClip eliminates the need to chase after the animals as it monitors them with video and uses sound signals to herd the livestock and bring them to the desired location. Farmers have been relying on this device for the past 3 years. Our drone is safe and reliable. I would like to learn about your specific situation in order to offer you the best solution. Thank you for your attention.
                            </p>
                            <Row className="narrativas-btns-3">
                                <Col md={3} />
                                <Col>
                                    <Button className="bg-orange pointer" onClick={() => navigate('../phases/pitch/estudio1/narrativaB')}>Back</Button>
                                </Col>
                                <Col>
                                    <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/quizz1')}>Continue</Button>
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