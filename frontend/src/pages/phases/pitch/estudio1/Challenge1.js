import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";

import { useNavigate } from 'react-router-dom';

export default function Challenge1() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="frame-img-2" />
            <div className="frame-container text-white">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        <h2>Challenge</h2>
                        <p className="mt-4">
                            Before preparing his pitch, Miguel had the opportunity to attend three presentations about similar products.
                        </p>
                        <p className="mt-4">
                            Considering what you have learned, analyze the following presentations.
                        </p>
                        <p className="mt-4">
                            Good luck!
                        </p>
                    </Container>
                    <Container className="bom-pitch mx-25 text-center">
                        <Row className="px-3 py-5 mx-25">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/narrativaA')}>
                                Go to challenge
                            </Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}