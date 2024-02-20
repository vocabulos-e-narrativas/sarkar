import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual_advogados-37.png";

import { useNavigate } from 'react-router-dom';

export default function Tutorial2() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img" />
            <div className="frame-container text-white ">
                <Row className="p-5">
                    <Col md={4} />
                    <Col md={7}>
                        <div className="mt-5 estrutura-title ">
                            <h2 className="pt-5">Lawyer</h2>
                            <h3 className="mt-5">
                                To protect inventions created within the company, it is necessary to submit a patent registration application.
                            </h3>
                            <h3 className="mt-5">
                                You can find more detailed information on the subject in the Industrial Property Code.
                            </h3>
                        </div>
                        <div className="mt-5 estrutura-title text-right">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/propriedade/estudio1/quizz3')}>Continue</Button>
                        </div>
                    </Col>
                    <Col md={1} />
                </Row>
            </div>
        </>
    );
}