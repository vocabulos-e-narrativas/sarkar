import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";
import PessoaOlho from "../../../../images/materialpisopitch/material_separado_pitch-70.png";
import Olho from "../../../../images/materialpisopitch/material_separado_pitch-67.png";
import PessoaMao from "../../../../images/materialpisopitch/material_separado_pitch-71.png";
import PessoaPerna from "../../../../images/materialpisopitch/material_separado_pitch-72.png";
import PessoaBraco from "../../../../images/materialpisopitch/material_separado_pitch-73.png";

import { useNavigate } from 'react-router-dom';

export default function Quizz3() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const handleClick = (clicked) => {
        setSelected(clicked);
    };

    const isSelected = (clicked) => {
        return selected === clicked;
    };

    const isContinueEnabled = () => {
        return selected === "1";
    };
    return (
        <>
            <img src={Frame} className="anagrama-frame-img" />
            <div className="anagrama-container text-white">
                <div className="p-5">
                    <Container className="mt-5 estrutura-title ">
                        <h2>Nonverbal communication</h2>
                    </Container>
                    <Container className="py-5">
                        <Row>
                            <Col md={4} className="pessoa-left">
                                <img src={PessoaOlho} className="" alt="" />
                            </Col>
                            <Col md={8} className="pessoa-partes">
                                <Row>
                                    <Col md={3} />
                                    <Col md={3} />
                                    <Col>
                                        <img src={Olho} className="" alt="" />
                                    </Col>
                                    <Col md={3} />
                                </Row>
                                <Row className="my-5">
                                    <p>
                                        Which of the options conveys more confidence during a speech?
                                    </p>
                                </Row>
                                <Row className={isSelected("1") ? "p-3 linguagem-pitch-resposta-certa" : "p-3 linguagem-pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("1")}>
                                        Looking the interlocutor in the eyes
                                    </Button>
                                </Row>
                                <Row className={isSelected("2") ? "p-3 linguagem-pitch-resposta-errada" : "p-3 linguagem-pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("2")}>
                                        Looking at the ground
                                    </Button>
                                </Row>
                                <Row className={isSelected("3") ? "p-3 linguagem-pitch-resposta-errada" : "p-3 linguagem-pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("3")}>
                                        Looking at the ceiling
                                    </Button>
                                </Row>
                                <Row className="mx-30 py-5">
                                    <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => navigate('../phases/pitch/estudio1/quizz4')}>Continue</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}