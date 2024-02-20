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
                        <h1 className="heading">Welcome to the jury room!</h1>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Miguel will present the pitch about the watch with the potential for <br />
                            making holographic calls to 4 investors. He has already thought about the <br />
                            ideas he wants to include in his presentation.
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            From the sentences provided, select 5 to be part of the pitch and<br /> arrange them by selecting their respective sequence.
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