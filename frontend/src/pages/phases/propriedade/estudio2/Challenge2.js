import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-14.png";

import { useNavigate } from 'react-router-dom';


export default function Challenge2() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="propriedade-frame-img" />
            <div className="estudio2-challenge1">
                <Row className="py-5 frame-container text-white">
                    <Col md={2} />
                    <Col className="mt-5">
                        <h1 className="pt-5">Challenge</h1>
                        <p className="mt-5">
                            Miguel is going to create a prescription medication delivery application to be delivered at home. The algorithm that Miguel is going to use already exists, and he will use it to establish direct communication between the doctor and the pharmacy.
                        </p>
                    </Col>
                    <Col md={5} />
                </Row>
                <Row className="py-5">
                    <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/propriedade/estudio2/quizz2')}>Go to challenge</Button>
                </Row>
            </div>
        </>
    );
}