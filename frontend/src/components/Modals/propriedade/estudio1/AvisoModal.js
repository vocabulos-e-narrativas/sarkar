import React from 'react';

import {
    Button,
    Modal,
    Row,
    Col
} from 'react-bootstrap';

import "../../../../styles/modal.css";

import Frame from "../../../../images/materialpisopitch/frame_sarkar-75.png";

export default function AvisoModal({ setIsOpen }) {
    return (
        <>
            <div className="darkBG" />
            {setIsOpen && <img src={Frame} className="img-100 p-3" />}
            <div className="text-center text-white">
                <div className="modal p-5">
                    <div className="modalHeader mt-5">
                        <h1 className="heading">Welcome to the first puzzle!</h1>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Miguel scheduled a meeting with a lawyer.<br /> The code to open the door is given by the number of triangles that exist in the figure.
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Good luck!
                        </h3>
                    </div>
                    <div className="modalActions p-5 text-center">
                        <Button className="desafio-btn bg-marine-green" onClick={() => setIsOpen(false)}>
                            <h3>Go to challenge</h3>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}