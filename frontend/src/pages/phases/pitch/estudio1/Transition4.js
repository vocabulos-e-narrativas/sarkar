import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";
import Pessoa from "../../../../images/materialpisopitch/material_separado_pitch-69.png";

import { useNavigate } from 'react-router-dom';

export default function Transition4() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="anagrama-frame-img" />
            <div className="anagrama-container text-white">
                <div className="p-5">
                    <Container className="mt-5 estrutura-title ">
                        <h2>Nonverbal communication</h2>
                    </Container>
                    <Container className="mx-48">
                        <Row className="pessoa">
                            <img src={Pessoa} className="" alt="" />
                        </Row>
                        <Row className="py-5 mx-6">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/quizz3')}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}