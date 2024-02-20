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
import Sheep from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-34.png";

export default function Quizz5() {
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
                    text={"With this question, you collected the final symbol."}
                    icon={Wolf}
                    url={"estudio1/puzzle2"}
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
                                    <Col md={6} />
                                    <Col>
                                        <img src={Sheep} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Bear} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Bear} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Wolf} alt="" className="" />
                                    </Col>
                                </Row>
                                <p className="">
                                    Before ending the meeting, Miguel took the opportunity to clarify a few more doubts. What might have been the lawyer's response to one of them?
                                </p>
                            </Container>
                            <Container className="text-center">
                                <Row className={isSelected("1") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("1")}>
                                        All content produced by an employee of the company is automatically owned by the company.
                                    </Button>
                                </Row>
                                <Row className={isSelected("2") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("2")}>
                                        Only inventions of new products are owned by the company; everything else is the intellectual property of the author of the idea.
                                    </Button>
                                </Row>
                                <Row className={isSelected("3") ? "p-3 pitch-resposta-errada" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("3")}>
                                        An innovative product is always the intellectual property of the person who conceptualized it.
                                    </Button>
                                </Row>
                                <Row className={isSelected("4") ? "p-3 pitch-resposta-certa" : "p-3 pitch-resposta"}>
                                    <Button className="button pointer" onClick={() => handleClick("4")}>
                                        For a product to be the intellectual property of a company, it is necessary to have a declaration from the employee assigning <br />the intellectual property to the company.
                                    </Button>
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
