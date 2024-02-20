import React from 'react';

import {
    Button,
    Modal,
    Row,
    Col
} from 'react-bootstrap';

import "../../../../styles/modal.css";

import { useNavigate } from 'react-router-dom';

import Frame from "../../../../images/materialpisopitch/frame_sarkar-75.png";

export default function AvisoModal({ setIsOpen }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="darkBG" />
            {setIsOpen && <img src={Frame} className="img-100 p-3" />}
            <div className="text-center text-white">
                <div className="modal p-5">
                    <div className="modalHeader mt-5">
                        <h1 className="heading">Oops, the door closed!</h1>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            You got locked in the first studio. <br />
                            On the computer, you will find answers that allow you to access the two necessary <br />
                            anagrams to open the door of the next studio and continue your journey.
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>Good luck!</h3>
                    </div>
                    <div className="modalActions p-5 text-center">
                        <Button className="desafio-btn bg-marine-green" onClick={() => navigate('/phases/pitch/estudio1/puzzle1')}>
                            <h3>Go to challenge</h3>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}