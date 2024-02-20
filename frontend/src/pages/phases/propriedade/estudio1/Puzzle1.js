import React, { useState, useEffect } from "react";

import {
    Container,
    Row,
    Col
} from "react-bootstrap";

import AvisoModal from "../../../../components/Modals/propriedade/estudio1/AvisoModal";
import SucessModal from "../../../../components/Modals/propriedade/estudio1/SucessModal";

import PuzzlePerto from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-08.png";

import N0 from "../../../../images/materialpisopitch/propriedade_intelectual/N0.png";
import N1 from "../../../../images/materialpisopitch/propriedade_intelectual/N1.png";
import N2 from "../../../../images/materialpisopitch/propriedade_intelectual/N2.png";
import N3 from "../../../../images/materialpisopitch/propriedade_intelectual/N3.png";
import N4 from "../../../../images/materialpisopitch/propriedade_intelectual/N4.png";
import N5 from "../../../../images/materialpisopitch/propriedade_intelectual/N5.png";
import N6 from "../../../../images/materialpisopitch/propriedade_intelectual/N6.png";
import N7 from "../../../../images/materialpisopitch/propriedade_intelectual/N7.png";
import N8 from "../../../../images/materialpisopitch/propriedade_intelectual/N8.png";
import N9 from "../../../../images/materialpisopitch/propriedade_intelectual/N9.png";


export default function Puzzle1() {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenSucess, setIsOpenSucess] = useState(false);

    const [currentImageSlot1, setCurrentImageSlot1] = useState(N0);
    const [currentImageSlot2, setCurrentImageSlot2] = useState(N0);
    const [currentImageSlot3, setCurrentImageSlot3] = useState(N0);
    const [currentImageSlot4, setCurrentImageSlot4] = useState(N0);

    const [selectedSlot, setSelectedSlot] = useState("N1");

    const handleImageClick = (image) => {
        if (selectedSlot === "N1") {
            const slot1Element = document.querySelector(".slot-n1");
            const slot2Element = document.querySelector(".slot-n2");
            const slot3Element = document.querySelector(".slot-n3");
            const slot4Element = document.querySelector(".slot-n4");
            const aux = `<img src=${image} alt="" />`;
            if (slot4Element) {
                slot4Element.innerHTML = slot3Element.innerHTML;
                slot3Element.innerHTML = slot2Element.innerHTML;
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            } else {
                slot1Element.innerHTML = aux;
                setCurrentImageSlot1(image);
            }
            setCurrentImageSlot1(image);
            setCurrentImageSlot2(null);
            setCurrentImageSlot3(null);
            setCurrentImageSlot4(null);
            setSelectedSlot("N2");
        }

        if (selectedSlot === "N2") {
            const slot1Element = document.querySelector(".slot-n1");
            const slot2Element = document.querySelector(".slot-n2");
            const slot3Element = document.querySelector(".slot-n3");
            const slot4Element = document.querySelector(".slot-n4");
            const aux = `<img src=${image} alt="" />`;
            if (slot4Element) {
                slot4Element.innerHTML = slot3Element.innerHTML;
                slot3Element.innerHTML = slot2Element.innerHTML;
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            } else {
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            }
            setCurrentImageSlot2(image);
            setSelectedSlot("N3");
        }

        if (selectedSlot === "N3") {
            const slot1Element = document.querySelector(".slot-n1");
            const slot2Element = document.querySelector(".slot-n2");
            const slot3Element = document.querySelector(".slot-n3");
            const slot4Element = document.querySelector(".slot-n4");
            const aux = `<img src=${image} alt="" />`;
            if (slot4Element) {
                slot4Element.innerHTML = slot3Element.innerHTML;
                slot3Element.innerHTML = slot2Element.innerHTML;
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            } else {
                slot3Element.innerHTML = slot2Element.innerHTML;
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            }
            setCurrentImageSlot3(image);
            setSelectedSlot("N4");
        }

        if (selectedSlot === "N4") {
            const slot1Element = document.querySelector(".slot-n1");
            const slot2Element = document.querySelector(".slot-n2");
            const slot3Element = document.querySelector(".slot-n3");
            const slot4Element = document.querySelector(".slot-n4");
            const aux = `<img src=${image} alt="" />`;
            if (slot4Element) {
                slot4Element.innerHTML = slot3Element.innerHTML;
                slot3Element.innerHTML = slot2Element.innerHTML;
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            } else {
                slot4Element.innerHTML = slot3Element.innerHTML;
                slot3Element.innerHTML = slot2Element.innerHTML;
                slot2Element.innerHTML = slot1Element.innerHTML;
                slot1Element.innerHTML = aux;
            }
            setCurrentImageSlot4(image);
            setSelectedSlot("N1");
        }
    };

    const handleClearSlots = () => {
        setCurrentImageSlot1(null);
        setCurrentImageSlot2(null);
        setCurrentImageSlot3(null);
        setCurrentImageSlot4(null);

        const slotElement1 = document.querySelector(".slot-n1");
        if (slotElement1) {
            slotElement1.innerHTML = "";
        }

        const slotElement2 = document.querySelector(".slot-n2");
        if (slotElement2) {
            slotElement2.innerHTML = "";
        }

        const slotElement3 = document.querySelector(".slot-n3");
        if (slotElement3) {
            slotElement3.innerHTML = "";
        }

        const slotElement4 = document.querySelector(".slot-n4");
        if (slotElement4) {
            slotElement4.innerHTML = "";
        }

        setSelectedSlot("N1");

    };


    const checkOrder = () => {
        const expectedOrder = [null, null, N2, N1];
        const selectedImages = [
            currentImageSlot4,
            currentImageSlot3,
            currentImageSlot2,
            currentImageSlot1
        ];

        console.log(JSON.stringify(selectedImages));
        console.log(JSON.stringify(expectedOrder));
        console.log(JSON.stringify(selectedImages) === JSON.stringify(expectedOrder));

        return JSON.stringify(selectedImages) === JSON.stringify(expectedOrder);
    };


    useEffect(() => {
        checkOrder();
    }, [
        currentImageSlot1,
        currentImageSlot2,
        currentImageSlot3,
        currentImageSlot4
    ]);

    const passCodeCorrect = checkOrder();


    return (
        <div className="img-container">
            <img src={PuzzlePerto} className="img-100" alt="" />
            {isOpen ? (
                <AvisoModal setIsOpen={setIsOpen} />
            ) : (
                <>
                    <div className="numeros">
                        <div className="slot-n slot-n1"></div>
                        <div className="slot-n slot-n2"></div>
                        <div className="slot-n slot-n3"></div>
                        <div className="slot-n slot-n4"></div>
                    </div>
                    <div className="numeros">
                        <div className="pointer numero-n numeros-1" onClick={() => handleImageClick(N1)}></div>
                        <div className="pointer numero-n numeros-2" onClick={() => handleImageClick(N2)}></div>
                        <div className="pointer numero-n numeros-3" onClick={() => handleImageClick(N3)}></div>
                        <div className="pointer numero-n numeros-4" onClick={() => handleImageClick(N4)}></div>
                        <div className="pointer numero-n numeros-5" onClick={() => handleImageClick(N5)}></div>
                        <div className="pointer numero-n numeros-6" onClick={() => handleImageClick(N6)}></div>
                        <div className="pointer numero-n numeros-7" onClick={() => handleImageClick(N7)}></div>
                        <div className="pointer numero-n numeros-8" onClick={() => handleImageClick(N8)}></div>
                        <div className="pointer numero-n numeros-9" onClick={() => handleImageClick(N9)}></div>
                        <div className="pointer numero-n numeros-0" onClick={() => handleImageClick(N0)}></div>
                        <div className="pointer numero-n numeros-del" onClick={() => handleClearSlots()}></div>
                        {passCodeCorrect ?
                            <div className="pointer numero-n numeros-validar" onClick={() => { setIsOpenSucess(true); handleClearSlots() }}></div>
                            :
                            <div className="pointer numero-n numeros-validar"></div>
                        }
                    </div>
                    {isOpenSucess &&
                        <SucessModal
                            text={"Miguel managed to enter the office just in time for his meeting."}
                            url={"estudio1/transition1"}
                            setIsOpen={setIsOpenSucess}
                        />
                    }
                </>
            )}
        </div>
    );
}
