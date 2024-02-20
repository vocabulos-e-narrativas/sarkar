import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-78.png";
import AnagramaCripto from "../../../../images/materialpisopitch/material_separado_pitch-43.png";
import AnagramaIcognito from "../../../../images/materialpisopitch/material_separado_pitch-44.png";

import { useNavigate } from 'react-router-dom';



export default function Anagrama1() {
    const navigate = useNavigate();
    return (
        <>
            <img src={Frame} className="anagrama-frame-img" />
            <div className="anagrama-container text-white">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        <h2>Success!</h2>
                        <p className="mt-4">
                            You have gained access to one of two anagrams.
                        </p>
                        <p className="mt-4">
                            Check the other file on the computer to discover the next clue and access the studio 2!
                        </p>
                    </Container>
                    <Container className="py-5 mx-25">
                        <Row>
                            <img src={AnagramaCripto} className="img-100 w-50" alt="" />
                            <img src={AnagramaIcognito} className="img-100 my-5" alt="" />
                        </Row>
                        <Row className="py-5 mx-25">
                            <Button className="bg-marine-green pointer" onClick={() => navigate('../phases/pitch/estudio1/transition3')}>Continue</Button>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}