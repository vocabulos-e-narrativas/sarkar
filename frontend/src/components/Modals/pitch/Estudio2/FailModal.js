import React from 'react';

import {
    Button,
    Modal,
    Row,
    Col
} from 'react-bootstrap';

import "../../../../styles/modal.css";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-79.png";
import X from "../../../../images/materialpisopitch/material_separado_pitch-62.png";
import { useNavigate } from 'react-router-dom';

export default function FailModal({ setIsOpen }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="darkBG" />
            {setIsOpen && <img src={Frame} className="img-100" />}
            <div className="text-center text-white">
                <div className="modal p-5">
                    <div className="modalHeader my-5">
                        <img src={X} alt="" className="" />
                    </div>
                    <div className="modalHeader mt-5">
                        <h1 className="heading">Oops!</h1>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            It seems like you didn't get the correct order!
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Try again.
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Good luck!
                        </h3>
                    </div>
                    <div className="modalActions p-5 text-center">
                        <Button className="desafio-btn bg-orange" onClick={() => navigate('/phases/pitch/estudio2/opening')}>
                            <h3> Try again</h3>
                        </Button>
                    </div>
                </div>
            </div >
        </>
    );
}