import React, { useState, useEffect } from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import AnagramaPerto from "../../../../images/materialpisopitch/pitch_anagrams-118.png";
import Anagrama1CertoPerto from "../../../../images/materialpisopitch/pitch_anagrams-129.png";
import Anagrama2CertoPerto from "../../../../images/materialpisopitch/pitch_anagrams-130.png";
import AnagramaAmbosCertoPerto from "../../../../images/materialpisopitch/material_separado_pitch-52.png";
import AnagramaAmbosCertoPerto2 from "../../../../images/materialpisopitch/material_separado_pitch-51.png";


import T from "../../../../images/materialpisopitch/pitch_anagrams-tt.png";
import R from "../../../../images/materialpisopitch/pitch_anagrams-rr.png";
import O from "../../../../images/materialpisopitch/pitch_anagrams-oo.png";
import S from "../../../../images/materialpisopitch/pitch_anagrams-ss.png";
import Y from "../../../../images/materialpisopitch/pitch_anagrams-yy.png";
import G1 from "../../../../images/materialpisopitch/pitch_anagrams-gg1.png";
import G2 from "../../../../images/materialpisopitch/pitch_anagrams-gg2.png";
import U from "../../../../images/materialpisopitch/pitch_anagrams-uu.png";
import L from "../../../../images/materialpisopitch/pitch_anagrams-ll.png";
import E from "../../../../images/materialpisopitch/pitch_anagrams-ee.png";
import N from "../../../../images/materialpisopitch/pitch_anagrams-nn.png";
import A1 from "../../../../images/materialpisopitch/pitch_anagrams-aa1.png";
import A2 from "../../../../images/materialpisopitch/pitch_anagrams-aa2.png";

export default function Puzzle2() {
    const navigate = useNavigate();
    const images1 = [T, R, O, S, Y];
    const [currentImageSlot11, setCurrentImageSlot11] = useState(null);
    const [currentImageSlot12, setCurrentImageSlot12] = useState(null);
    const [currentImageSlot13, setCurrentImageSlot13] = useState(null);
    const [currentImageSlot14, setCurrentImageSlot14] = useState(null);
    const [currentImageSlot15, setCurrentImageSlot15] = useState(null);
    const images2 = [G1, U, L, E, N, A1, A2, G2];
    const [currentImageSlot21, setCurrentImageSlot21] = useState(null);
    const [currentImageSlot22, setCurrentImageSlot22] = useState(null);
    const [currentImageSlot23, setCurrentImageSlot23] = useState(null);
    const [currentImageSlot24, setCurrentImageSlot24] = useState(null);
    const [currentImageSlot25, setCurrentImageSlot25] = useState(null);
    const [currentImageSlot26, setCurrentImageSlot26] = useState(null);
    const [currentImageSlot27, setCurrentImageSlot27] = useState(null);
    const [currentImageSlot28, setCurrentImageSlot28] = useState(null);

    const [selectedSlot1, setSelectedSlot1] = useState("");
    const [selectedLetters1, setSelectedLetters1] = useState([]);

    const [selectedSlot2, setSelectedSlot2] = useState("");
    const [selectedLetters2, setSelectedLetters2] = useState([]);

    const [leverClicked, setLeverClicked] = useState(false);

    const handleSlot1Click = (slot) => {
        setSelectedSlot1(slot);
    };

    const handleSlot2Click = (slot) => {
        setSelectedSlot2(slot);
    };

    const handleImageClick1 = (image, id) => {
        if (selectedLetters1.includes(id)) {
            // Letra já selecionada, exibir mensagem de erro ou ignorar o clique
            console.log("Letra já selecionada");
            return;
        }
        if (selectedSlot1) {
            // Substituir o slot pela imagem
            const slot1Element = document.querySelector(`.${selectedSlot1}`);
            if (slot1Element) {
                slot1Element.innerHTML = `<img src=${image} alt="" />`;
            }

            // Atribuir valor ao estado correspondente ao slot selecionado
            if (selectedSlot1 === "slot-lt") {
                setCurrentImageSlot11(images1.indexOf(image));
            } else if (selectedSlot1 === "slot-lr") {
                setCurrentImageSlot12(images1.indexOf(image));
            } else if (selectedSlot1 === "slot-lo") {
                setCurrentImageSlot13(images1.indexOf(image));
            } else if (selectedSlot1 === "slot-ls") {
                setCurrentImageSlot14(images1.indexOf(image));
            } else if (selectedSlot1 === "slot-ly") {
                setCurrentImageSlot15(images1.indexOf(image));
            }

            setSelectedLetters1((prevSelectedLetters) => [...prevSelectedLetters, id]);
            setSelectedSlot1(""); // Limpar o slot selecionado
        }
    };

    const handleImageClick2 = (image, id) => {
        if (selectedLetters2.includes(id)) {
            // Letra já selecionada, exibir mensagem de erro ou ignorar o clique
            console.log("Letra já selecionada");
            return;
        }
        if (selectedSlot2) {
            // Substituir o slot pela imagem
            const slot2Element = document.querySelector(`.${selectedSlot2}`);
            if (slot2Element) {
                slot2Element.innerHTML = `<img src=${image} alt="" />`;
            }

            // Atribuir valor ao estado correspondente ao slot selecionado
            if (selectedSlot2 === "slot-lg") {
                setCurrentImageSlot21(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-lu") {
                setCurrentImageSlot22(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-ll") {
                setCurrentImageSlot23(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-le") {
                setCurrentImageSlot24(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-ln") {
                setCurrentImageSlot25(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-la") {
                setCurrentImageSlot26(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-la2") {
                setCurrentImageSlot27(images2.indexOf(image));
            } else if (selectedSlot2 === "slot-lg2") {
                setCurrentImageSlot28(images2.indexOf(image));
            }

            setSelectedLetters2((prevSelectedLetters) => [...prevSelectedLetters, id]);
            setSelectedSlot2(""); // Limpar o slot selecionado
        }
    };

    const handleClearSlots = () => {

        if (passCodeCorrect1 && passCodeCorrect2) {
            return null;
        } else if (passCodeCorrect1 && !passCodeCorrect2) {

            setCurrentImageSlot21(null);
            setCurrentImageSlot22(null);
            setCurrentImageSlot23(null);
            setCurrentImageSlot24(null);
            setCurrentImageSlot25(null);
            setCurrentImageSlot26(null);
            setCurrentImageSlot27(null);
            setCurrentImageSlot28(null);

            const slot2Element1 = document.querySelector(".slot-lg");
            if (slot2Element1) {
                slot2Element1.innerHTML = "";
            }

            const slot2Element2 = document.querySelector(".slot-lu");
            if (slot2Element2) {
                slot2Element2.innerHTML = "";
            }

            const slot2Element3 = document.querySelector(".slot-ll");
            if (slot2Element3) {
                slot2Element3.innerHTML = "";
            }

            const slot2Element4 = document.querySelector(".slot-le");
            if (slot2Element4) {
                slot2Element4.innerHTML = "";
            }

            const slot2Element5 = document.querySelector(".slot-ln");
            if (slot2Element5) {
                slot2Element5.innerHTML = "";
            }

            const slot2Element6 = document.querySelector(".slot-la");
            if (slot2Element6) {
                slot2Element6.innerHTML = "";
            }

            const slot2Element7 = document.querySelector(".slot-la2");
            if (slot2Element7) {
                slot2Element7.innerHTML = "";
            }

            const slot2Element8 = document.querySelector(".slot-lg2");
            if (slot2Element8) {
                slot2Element8.innerHTML = "";
            }

            setSelectedLetters2([]);

        } else if (passCodeCorrect2 && !passCodeCorrect1) {

            setCurrentImageSlot11(null);
            setCurrentImageSlot12(null);
            setCurrentImageSlot13(null);
            setCurrentImageSlot14(null);
            setCurrentImageSlot15(null);

            const slot1Element1 = document.querySelector(".slot-lt");
            if (slot1Element1) {
                slot1Element1.innerHTML = "";
            }

            const slot1Element2 = document.querySelector(".slot-lr");
            if (slot1Element2) {
                slot1Element2.innerHTML = "";
            }

            const slot1Element3 = document.querySelector(".slot-lo");
            if (slot1Element3) {
                slot1Element3.innerHTML = "";
            }

            const slot1Element4 = document.querySelector(".slot-ls");
            if (slot1Element4) {
                slot1Element4.innerHTML = "";
            }

            const slot1Element5 = document.querySelector(".slot-ly");
            if (slot1Element5) {
                slot1Element5.innerHTML = "";
            }

            setSelectedLetters1([]);
        } else {
            setCurrentImageSlot11(null);
            setCurrentImageSlot12(null);
            setCurrentImageSlot13(null);
            setCurrentImageSlot14(null);
            setCurrentImageSlot15(null);
            setCurrentImageSlot21(null);
            setCurrentImageSlot22(null);
            setCurrentImageSlot23(null);
            setCurrentImageSlot24(null);
            setCurrentImageSlot25(null);
            setCurrentImageSlot26(null);
            setCurrentImageSlot27(null);
            setCurrentImageSlot28(null);

            const slot1Element1 = document.querySelector(".slot-lt");
            if (slot1Element1) {
                slot1Element1.innerHTML = "";
            }

            const slot1Element2 = document.querySelector(".slot-lr");
            if (slot1Element2) {
                slot1Element2.innerHTML = "";
            }

            const slot1Element3 = document.querySelector(".slot-lo");
            if (slot1Element3) {
                slot1Element3.innerHTML = "";
            }

            const slot1Element4 = document.querySelector(".slot-ls");
            if (slot1Element4) {
                slot1Element4.innerHTML = "";
            }

            const slot1Element5 = document.querySelector(".slot-ly");
            if (slot1Element5) {
                slot1Element5.innerHTML = "";
            }

            const slot2Element1 = document.querySelector(".slot-lg");
            if (slot2Element1) {
                slot2Element1.innerHTML = "";
            }

            const slot2Element2 = document.querySelector(".slot-lu");
            if (slot2Element2) {
                slot2Element2.innerHTML = "";
            }

            const slot2Element3 = document.querySelector(".slot-ll");
            if (slot2Element3) {
                slot2Element3.innerHTML = "";
            }

            const slot2Element4 = document.querySelector(".slot-le");
            if (slot2Element4) {
                slot2Element4.innerHTML = "";
            }

            const slot2Element5 = document.querySelector(".slot-ln");
            if (slot2Element5) {
                slot2Element5.innerHTML = "";
            }

            const slot2Element6 = document.querySelector(".slot-la");
            if (slot2Element6) {
                slot2Element6.innerHTML = "";
            }

            const slot2Element7 = document.querySelector(".slot-la2");
            if (slot2Element7) {
                slot2Element7.innerHTML = "";
            }

            const slot2Element8 = document.querySelector(".slot-lg2");
            if (slot2Element8) {
                slot2Element8.innerHTML = "";
            }

            setSelectedLetters1([]);
            setSelectedLetters2([]);
        }
    };




    const checkOrder1 = () => {
        const expectedOrder1 = [S, T, O, R, Y];
        const selectedImages1 = [
            images1[currentImageSlot11],
            images1[currentImageSlot12],
            images1[currentImageSlot13],
            images1[currentImageSlot14],
            images1[currentImageSlot15]
        ];

        console.log(JSON.stringify(selectedImages1));
        console.log(JSON.stringify(expectedOrder1));

        return JSON.stringify(selectedImages1) === JSON.stringify(expectedOrder1);
    };

    const checkOrder2 = () => {
        const expectedOrder2 = [L, A1 || A2, N, G1 || G2, U, A1 || A2, G1 || G2, E];
        const selectedImages2 = [
            images2[currentImageSlot21],
            images2[currentImageSlot22],
            images2[currentImageSlot23],
            images2[currentImageSlot24],
            images2[currentImageSlot25],
            images2[currentImageSlot26],
            images2[currentImageSlot27],
            images2[currentImageSlot28]
        ];

        console.log(JSON.stringify(selectedImages2));
        console.log(JSON.stringify(expectedOrder2));

        return JSON.stringify(selectedImages2) === JSON.stringify(expectedOrder2);
    };

    useEffect(() => {
        checkOrder1();
        checkOrder2();
        if (leverClicked) {
            // Wait for 3 seconds and then redirect
            const timeout = setTimeout(() => {
                navigate('../phases/pitch/estudio1/exit');
            }, 3000);

            // Cleanup the timeout when the component unmounts or leverClicked changes
            return () => clearTimeout(timeout);
        }
    }, [
        currentImageSlot11,
        currentImageSlot12,
        currentImageSlot13,
        currentImageSlot14,
        currentImageSlot15,
        currentImageSlot21,
        currentImageSlot22,
        currentImageSlot23,
        currentImageSlot24,
        currentImageSlot25,
        currentImageSlot26,
        currentImageSlot27,
        currentImageSlot28,
        leverClicked,
        navigate
    ]);

    const passCodeCorrect1 = checkOrder1();
    const passCodeCorrect2 = checkOrder2();

    return (
        <div className="img-container">
            {passCodeCorrect1 && passCodeCorrect2 ? (
                <>
                    {leverClicked ? (
                        <img src={AnagramaAmbosCertoPerto2} className="img-100" alt="" />
                    ) : (
                        <>
                            <img src={AnagramaAmbosCertoPerto} className="img-100" alt="" />
                            <div className="pointer alavanca" onClick={() => setLeverClicked(true)}></div>
                        </>
                    )}
                </>
            ) : passCodeCorrect1 ? (
                <>
                    <img src={Anagrama1CertoPerto} className="img-100" alt="" />
                </>
            ) : passCodeCorrect2 ? (
                <>
                    <img src={Anagrama2CertoPerto} className="img-100" alt="" />
                </>
            ) : (
                <>
                    <img src={AnagramaPerto} className="img-100" alt="" />
                </>
            )}
            <Container>
                <Row className="letras">
                    {passCodeCorrect1 ? (
                        <div>
                            <img src={T} className="pointer lt" alt="" />
                            <img src={R} className="pointer lr" alt="" />
                            <img src={O} className="pointer lo" alt="" />
                            <img src={S} className="pointer ls" alt="" />
                            <img src={Y} className="pointer ly" alt="" />
                        </div>
                    ) : (
                        <div>
                            <img src={T} className="pointer lt" alt="" onClick={() => handleImageClick1(T, "T")} />
                            <div className="pointer slot-1 slot-lt" onClick={() => handleSlot1Click("slot-lt")}></div>
                            <img src={R} className="pointer lr" alt="" onClick={() => handleImageClick1(R, "R")} />
                            <div className="pointer slot-1 slot-lr" onClick={() => handleSlot1Click("slot-lr")}></div>
                            <img src={O} className="pointer lo" alt="" onClick={() => handleImageClick1(O, "O")} />
                            <div className="pointer slot-1 slot-lo" onClick={() => handleSlot1Click("slot-lo")}></div>
                            <img src={S} className="pointer ls" alt="" onClick={() => handleImageClick1(S, "S")} />
                            <div className="pointer slot-1 slot-ls" onClick={() => handleSlot1Click("slot-ls")}></div>
                            <img src={Y} className="pointer ly" alt="" onClick={() => handleImageClick1(Y, "Y")} />
                            <div className="pointer slot-1 slot-ly" onClick={() => handleSlot1Click("slot-ly")}></div>
                        </div>
                    )}
                </Row>
                <Row className="letras">
                    {passCodeCorrect2 ? (
                        <div>
                            <img src={G1} className="pointer lg" alt="" />
                            <img src={U} className="pointer lu" alt="" />
                            <img src={L} className="pointer ll" alt="" />
                            <img src={E} className="pointer le" alt="" />
                            <img src={N} className="pointer ln" alt="" />
                            <img src={A1} className="pointer la" alt="" />
                            <img src={A2} className="pointer la2" alt="" />
                            <img src={G2} className="pointer lg2" alt="" />
                        </div>
                    ) : (
                        <div>
                            <img src={G1} className="pointer lg" alt="" onClick={() => handleImageClick2(G1, "G1")} />
                            <div className="pointer slot-2 slot-lg" onClick={() => handleSlot2Click("slot-lg")}></div>
                            <img src={U} className="pointer lu" alt="" onClick={() => handleImageClick2(U, "U")} />
                            <div className="pointer slot-2 slot-lu" onClick={() => handleSlot2Click("slot-lu")}></div>
                            <img src={L} className="pointer ll" alt="" onClick={() => handleImageClick2(L, "L")} />
                            <div className="pointer slot-2 slot-ll" onClick={() => handleSlot2Click("slot-ll")}></div>
                            <img src={E} className="pointer le" alt="" onClick={() => handleImageClick2(E, "E")} />
                            <div className="pointer slot-2 slot-le" onClick={() => handleSlot2Click("slot-le")}></div>
                            <img src={N} className="pointer ln" alt="" onClick={() => handleImageClick2(N, "N")} />
                            <div className="pointer slot-2 slot-ln" onClick={() => handleSlot2Click("slot-ln")}></div>
                            <img src={A1} className="pointer la" alt="" onClick={() => handleImageClick2(A1, "A1")} />
                            <div className="pointer slot-2 slot-la" onClick={() => handleSlot2Click("slot-la")}></div>
                            <img src={A2} className="pointer la2" alt="" onClick={() => handleImageClick2(A2, "A2")} />
                            <div className="pointer slot-2 slot-la2" onClick={() => handleSlot2Click("slot-la2")}></div>
                            <img src={G2} className="pointer lg2" alt="" onClick={() => handleImageClick2(G2, "G2")} />
                            <div className="pointer slot-2 slot-lg2" onClick={() => handleSlot2Click("slot-lg2")}></div>
                        </div>
                    )}
                </Row>
                <Row className="letras">
                    <div className="pointer anagram-del bg-orange py-2 px-4" onClick={() => handleClearSlots()}>
                        CLEAR
                    </div>
                </Row>
            </Container>
        </div>
    );
}
