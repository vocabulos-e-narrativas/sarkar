import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

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
        <div className="img-container">
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        <h2>Question</h2>
                        <p className="mt-4">
                            Which of the following processes/products can be subject to a patent registration by Miguel's company?
                        </p>
                    </Container>
                    <Container className="text-center">
                        <Row className={isSelected("1") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("1")}>Holography technology</Button>
                        </Row>
                        <Row className={isSelected("2") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("2")}>Digital watch</Button>
                        </Row>
                        <Row className={isSelected("3") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("3")}>Application of holography technology to a digital watch</Button>
                        </Row>
                        <Row className={isSelected("4") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                            <Button className="button pointer" onClick={() => handleClick("4")}>Material used in the watch strap</Button>
                        </Row>
                        <Row className="mx-30 py-5">
                            <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => { navigate("/phases/propriedade/estudio2/challenge2") }}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}
