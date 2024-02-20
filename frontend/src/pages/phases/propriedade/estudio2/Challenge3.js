import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-15.png";

import { useNavigate } from 'react-router-dom';


export default function Challenge3() {
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
                            Miguel is going to create a meal preparation and delivery service based on the dietary plan prescribed by a nutritionist. The service is personalized and prioritizes the dietary preferences of the client.
                        </p>
                    </Col>
                    <Col md={5} />
                </Row>
                <Row className="py-5">
                    <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/propriedade/estudio2/quizz3')}>Go to challenge</Button>
                </Row>
            </div>
        </>
    );
}