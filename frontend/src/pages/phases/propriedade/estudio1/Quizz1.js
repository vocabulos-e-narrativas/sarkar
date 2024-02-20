import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";

import SucessModal from "../../../../components/Modals/propriedade/estudio1/SucessModal";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";
import Wolf from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-33.png";

export default function Quizz1() {
    const [isOpenSucess, setIsOpenSucess] = useState(false);

    const [selected, setSelected] = useState(null);

    const handleClick = (clicked) => {
        setSelected(clicked);
    };

    const isSelected = (clicked) => {
        return selected === clicked;
    };

    const isContinueEnabled = () => {
        return selected === "4";
    };

    return (
        <div className="img-container">
            {isOpenSucess ?
                <SucessModal
                    text={"With this question, you collected one of the symbols you need to move on to the next stage."}
                    icon={Wolf}
                    url={"estudio1/quizz2"}
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
                                    Which of the following products/processes cannot be applied to intellectual property?
                                </p>
                            </Container>
                            <Container className="text-center">
                                <Row className={isSelected("1") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("1")}>Painting</Button>
                                </Row>
                                <Row className={isSelected("2") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("2")}>Literary work</Button>
                                </Row>
                                <Row className={isSelected("3") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("3")}>Music</Button>
                                </Row>
                                <Row className={isSelected("4") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("4")}>Common word</Button>
                                </Row>
                                <Row className="mx-30 py-5">
                                    <Button className="bg-marine-green pointer" disabled={!isContinueEnabled()} onClick={() => setIsOpenSucess(true)}>Continue</Button>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}
