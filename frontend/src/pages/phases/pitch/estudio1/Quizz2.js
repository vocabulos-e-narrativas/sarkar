import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

import { useNavigate } from 'react-router-dom';

export default function Quizz2() {
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
                            Considering what you have read, which of the following aspects should be valued for an effective pitch?
                        </p>
                    </Container>
                    <Container className="text-center">
                        <Row className={isSelected("1") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("1")}>
                                Duration between 45 seconds and 1 minute
                            </Button>
                        </Row>
                        <Row className={isSelected("2") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("2")}>
                                Providing detailed information about the presented idea
                            </Button>
                        </Row>
                        <Row className={isSelected("3") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("3")}>
                                Communication should be done in a way that the main idea is well understood
                            </Button>
                        </Row>
                        <Row className={isSelected("4") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("4")}>
                                Providing detailed information about the presented idea
                            </Button>
                        </Row>
                        <Row className="mx-30 py-5">
                            <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => navigate('../phases/pitch/estudio1/anagram1')}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
