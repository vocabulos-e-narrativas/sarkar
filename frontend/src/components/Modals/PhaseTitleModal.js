import React from 'react';

import {
    Button,
} from 'react-bootstrap';

import "../../styles/modal.css";


export default function PhaseTitleModal({ title, text, setIsOpen }) {

    const processedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <>
            <div className="phaseTitle-darkBG text-center text-white">
                <div className="modal p-5">
                    <div className="modalHeader">
                        <h1 className="heading">{title}</h1>
                    </div>
                    <div className="modalContent mt-4 mb-5">
                        <h4>
                            {processedText}
                        </h4>
                    </div>
                    <div className="modalActions text-center">
                        <Button className="desafio-btn bg-marine-green" onClick={() => setIsOpen(false)}>
                            <h4>Start!</h4>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}