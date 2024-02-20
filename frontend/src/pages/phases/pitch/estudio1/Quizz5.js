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
import Mao from "../../../../images/materialpisopitch/material_separado_pitch-65.png";
import PessoaPerna from "../../../../images/materialpisopitch/material_separado_pitch-72.png";
import Perna from "../../../../images/materialpisopitch/material_separado_pitch-68.png";
import PessoaBraco from "../../../../images/materialpisopitch/material_separado_pitch-73.png";

import { useNavigate } from 'react-router-dom';

export default function Quizz5() {
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
                                <img src={PessoaPerna} className="" alt="" />
                            </Col>
                            <Col md={8} className="pessoa-partes">
                                <Row>
                                    <Col md={3}>
                                        <img src={Mao} className="" alt="" />
                                    </Col>
                                    <Col md={3} />
                                    <Col>
                                        <img src={Olho} className="" alt="" />
                                    </Col>
                                    <Col md={3}>
                                        <img src={Perna} className="" alt="" />
                                    </Col>
                                </Row>
                                <Row className="my-4">
                                    <p>
                                        The investors to whom you are presenting the pitch are seated in front of you. Which of the options indicates that they probably don't believe what you're telling them?
                                    </p>
                                </Row>
                                <Row className={isSelected("1") ? "p-3 linguagem-pitch-resposta-certa" : "p-3 linguagem-pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("1")}>
                                        Crossed legs
                                    </Button>
                                </Row>
                                <Row className={isSelected("2") ? "p-3 linguagem-pitch-resposta-errada" : "p-3 linguagem-pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("2")}>
                                        Uncrossed legs but close together
                                    </Button>
                                </Row>
                                <Row className={isSelected("3") ? "p-3 linguagem-pitch-resposta-errada" : "p-3 linguagem-pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("3")}>
                                        Uncrossed legs and spread apart
                                    </Button>
                                </Row>
                                <Row className="mx-30 py-5">
                                    <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => navigate('../phases/pitch/estudio1/quizz6')}>Continue</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}