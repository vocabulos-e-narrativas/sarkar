import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";


import SucessModal from "../../../../components/Modals/propriedade/estudio1/SucessModal";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

export default function Quizz3() {

    const [isOpenSucess, setIsOpenSucess] = useState(false);
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
            {isOpenSucess ?
                <SucessModal
                    text={"You helped Miguel complete another task. \nDiscover the code that allows you to \naccess the card that opens the next studio."}
                    url={"estudio2/transition2"}
                    setIsOpen={setIsOpenSucess}
                />
                :
                <>
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
                                    <Button className="button pointer" onClick={() => handleClick("1")}>The take-away service.</Button>
                                </Row>
                                <Row className={isSelected("2") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("2")}>The customer doesn't need to worry about meals.</Button>
                                </Row>
                                <Row className={isSelected("3") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("3")}>The personalized service.</Button>
                                </Row>
                                <Row className={isSelected("4") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("4")}>A digital method that allows sending the nutritional plan to the restaurant.</Button>
                                </Row>
                                <Row className="mx-30 py-5">
                                    <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => setIsOpenSucess(true)}>Continue</Button>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </>
            }
        </div >
    );
}
