import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";

import SucessModal from "../../../../components/Modals/propriedade/estudio1/SucessModal";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";
import Bear from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-35.png";
import Wolf from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-33.png";

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
        return selected === "2";
    };

    return (
        <div className="img-container">
            {isOpenSucess ?
                <SucessModal
                    text={"With this question, you collected your third symbol."}
                    icon={Bear}
                    url={"estudio1/quizz4"}
                    setIsOpen={setIsOpenSucess}
                />
                :
                <>
                    <img src={Frame} className="frame-img-2" />
                    <div className="frame-container text-white">
                        <div className="p-5">
                            <Container className="my-5 estrutura-title ">
                                <Row className="mb-5">
                                    <Col>
                                        <h2>Question</h2>
                                    </Col>
                                    <Col md={8} />
                                    <Col>
                                        <img src={Bear} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Wolf} alt="" className="" />
                                    </Col>
                                </Row>
                                <p className="">
                                    Which of the statements is true?
                                </p>
                            </Container>
                            <Container className="text-center">
                                <Row className={isSelected("1") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("1")}>A patent is only valid in the country where the patent registration was filed.</Button>
                                </Row>
                                <Row className={isSelected("2") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("2")}>The patent registration application must include the innovative elements of the invention.</Button>
                                </Row>
                                <Row className={isSelected("3") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("3")}>Patent registration is something that is done automatically after the creation of an invention.</Button>
                                </Row>
                                <Row className={isSelected("4") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("4")}>Patent registration is a fast process that is usually completed within two months.</Button>
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
