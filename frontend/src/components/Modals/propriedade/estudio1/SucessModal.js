import React from 'react';

import {
    Button,
    Modal,
    Row,
    Col
} from 'react-bootstrap';

import "../../../../styles/modal.css";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-78.png";
import Star from "../../../../images/materialpisopitch/material_separado_pitch-63.png";

import { useNavigate } from 'react-router-dom';

export default function SucessModal({ text, icon, url, setIsOpen }) {
    const navigate = useNavigate();

    const processedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <>
            {setIsOpen && <img src={Frame} className="img-100" />}
            <div className="text-center text-white">
                <div className="modal p-5">
                    <div className="modalHeader my-5">
                        <img src={Star} alt="" className="" />
                    </div>
                    <div className="modalHeader my-5">
                        <h1 className="heading">Success!</h1>
                    </div>
                    <div className="modalContent py-5">
                        <h3 className=''>
                            {processedText}
                        </h3>
                        {icon &&
                            <img src={icon} alt="" className="my-5" />
                        }
                    </div>
                    <div className="modalActions text-center">
                        <Button className="desafio-btn bg-marine-green" onClick={() => navigate(`/phases/propriedade/${url}`)}>
                            <h3>Continue</h3>
                        </Button>
                    </div>
                </div>
            </div >
        </>
    );
}