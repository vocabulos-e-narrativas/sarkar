import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

import { useNavigate } from 'react-router-dom';

export default function Quizz1() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const handleClick = (clicked) => {
        setSelected(clicked);
    };

    const isSelected = (clicked) => {
        return selected === clicked;
    };

    const isContinueEnabled = () => {
        return selected === "3";
    };

    return (
        <>
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        <h2>Question</h2>
                        <p className="mt-4">
                            Based on the information about pitch that was presented to you, which presentation has the best structure?
                        </p>
                    </Container>
                    <Container className="text-center">
                        <Row className={isSelected("1") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("1")}>Presentation A</Button>
                        </Row>
                        <Row className={isSelected("2") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("2")}>Presentation B</Button>
                        </Row>
                        <Row className={isSelected("3") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("3")}>Presentation C</Button>
                        </Row>
                        <Row className="mx-30 py-5">
                            <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => navigate('../phases/pitch/estudio1/quizz2')}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
