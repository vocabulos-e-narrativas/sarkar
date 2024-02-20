import React, { useState, useEffect, useContext } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";

import SucessModal from "../../../../components/Modals/propriedade/estudio1/SucessModal";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_frame-76.png";
import Bear from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-35.png";
import Wolf from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-33.png";
import Sheep from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-34.png";
import Fox from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-36.png";

import AnagramaPerto from "../../../../images/materialpisopitch/propriedade_intelectual/anagrama_PI-167.png";
import Anagrama1CertoPerto from "../../../../images/materialpisopitch/propriedade_intelectual/anagrama_PI-168.png";

import F from "../../../../images/materialpisopitch/propriedade_intelectual/propriedade_anagrams-ff.png";
import O from "../../../../images/materialpisopitch/propriedade_intelectual/propriedade_anagrams-oo.png";
import X from "../../../../images/materialpisopitch/propriedade_intelectual/propriedade_anagrams-xx.png";

import axios from "axios";
import { AuthContext } from "../../../../context/AuthProvider";

export default function Puzzle2() {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');
    const [completedChallenges, setCompletedChallenges] = useState(0);

    const getCompletedChallenges = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getCompletedChallenges', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log(res.data.completed_challenges);
                    setCompletedChallenges(res.data.completed_challenges);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const completeChallenge = () => {
        if (auth) {
            const maxCompletedChallenges = Math.max(completedChallenges, 4);
            axios.patch(
                'http://localhost:5000/auth/updateCompletedChallenges',
                { challenges: maxCompletedChallenges },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Número de desafios concluídos atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o número de desafios concluídos:', error);
                });
        }

    };

    const [isOpenSucess, setIsOpenSucess] = useState(false);

    const images = [O, X, F];

    const [currentImageSlot1, setCurrentImageSlot1] = useState(null);
    const [currentImageSlot2, setCurrentImageSlot2] = useState(null);
    const [currentImageSlot3, setCurrentImageSlot3] = useState(null);

    const [selectedSlot, setSelectedSlot] = useState("");
    const [selectedLetters, setSelectedLetters] = useState([]);

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
    };

    const handleImageClick = (image, id) => {
        if (selectedLetters.includes(id)) {
            // Letra já selecionada, exibir mensagem de erro ou ignorar o clique
            console.log("Letra já selecionada");
            return;
        }
        if (selectedSlot) {
            // Substituir o slot pela imagem
            const slotElement = document.querySelector(`.${selectedSlot}`);
            if (slotElement) {
                if (image === F) {
                    slotElement.innerHTML = `<img src=${image} class="mx-3" alt="" />`;
                } else {
                    slotElement.innerHTML = `<img src=${image} alt="" />`;
                }
            }

            // Atribuir valor ao estado correspondente ao slot selecionado
            if (selectedSlot === "propriedade-puzzle-slot-lo") {
                setCurrentImageSlot1(images.indexOf(image));
            } else if (selectedSlot === "propriedade-puzzle-slot-lx") {
                setCurrentImageSlot2(images.indexOf(image));
            } else if (selectedSlot === "propriedade-puzzle-slot-lf") {
                setCurrentImageSlot3(images.indexOf(image));
            }

            setSelectedLetters((prevSelectedLetters) => [...prevSelectedLetters, id]);
            setSelectedSlot(""); // Limpar o slot selecionado
        }
    };

    const handleClearSlots = () => {


        if (!passCodeCorrect) {
            setCurrentImageSlot1(null);
            setCurrentImageSlot2(null);
            setCurrentImageSlot3(null);


            const slotElement1 = document.querySelector(".propriedade-puzzle-slot-lo");
            if (slotElement1) {
                slotElement1.innerHTML = "";
            }

            const slotElement2 = document.querySelector(".propriedade-puzzle-slot-lx");
            if (slotElement2) {
                slotElement2.innerHTML = "";
            }

            const slotElement3 = document.querySelector(".propriedade-puzzle-slot-lf");
            if (slotElement3) {
                slotElement3.innerHTML = "";
            }

            setSelectedLetters([]);
        }
    };




    const checkOrder = () => {
        const expectedOrder = [F, O, X];
        const selectedImages = [
            images[currentImageSlot1],
            images[currentImageSlot2],
            images[currentImageSlot3],
        ];

        console.log(JSON.stringify(selectedImages));
        console.log(JSON.stringify(expectedOrder));

        return JSON.stringify(selectedImages) === JSON.stringify(expectedOrder);
    };

    useEffect(() => {
        getCompletedChallenges();
        checkOrder();
    }, [
        currentImageSlot1,
        currentImageSlot2,
        currentImageSlot3,
    ]);


    const passCodeCorrect = checkOrder();

    return (
        <div className="">
            {isOpenSucess ?
                <SucessModal
                    text={"Advance to the next stage and help Miguel apply what he has learned."}
                    icon={Fox}
                    url={"propriedadeHall"}
                    setIsOpen={setIsOpenSucess}
                />
                :
                <>
                    <img src={Frame} className="frame-img-2" />
                    <div className="text-white">
                        <div className="p-5">
                            <Container className="frame-container my-5 estrutura-title ">
                                <Row className="mb-5">
                                    <Col>
                                        <h2>Challenge</h2>
                                    </Col>
                                    <Col md={4} />
                                    <Col>
                                        <img src={Wolf} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Sheep} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Bear} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Bear} alt="" className="" />
                                    </Col>
                                    <Col>
                                        <img src={Wolf} alt="" className="" />
                                    </Col>
                                </Row>
                                <p className="">
                                    Now that Miguel has the necessary information, help him progress by indicating which archetype is missing from the collection of symbols he managed to gather.
                                </p>
                            </Container>
                            <div className="">
                                <Container>
                                    <Row className="propriedade-puzzle-letras">
                                        {passCodeCorrect ? (
                                            <div>
                                                <img src={O} className="pointer propriedade-puzzle-lo" alt="" />
                                                <img src={X} className="pointer propriedade-puzzle-lx" alt="" />
                                                <img src={F} className="pointer propriedade-puzzle-lf" alt="" />
                                                <img src={Anagrama1CertoPerto} className="propriedade-puzzle-slot" alt="" />
                                                <Row className="propriedade-puzzle-btns">
                                                    <Col>
                                                        <Button className="bg-marine-green pointer" onClick={() => { completeChallenge(); setIsOpenSucess(true); }}>Continue</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button className="bg-orange">Clear</Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ) : (
                                            <div>
                                                <img src={O} className="pointer propriedade-puzzle-lo" alt="" onClick={() => handleImageClick(O, "O")} />
                                                <div className="pointer propriedade-puzzle-slot-1 propriedade-puzzle-slot-lo" onClick={() => handleSlotClick("propriedade-puzzle-slot-lo")}></div>
                                                <img src={X} className="pointer propriedade-puzzle-lx" alt="" onClick={() => handleImageClick(X, "X")} />
                                                <div className="pointer propriedade-puzzle-slot-1 propriedade-puzzle-slot-lx" onClick={() => handleSlotClick("propriedade-puzzle-slot-lx")}></div>
                                                <img src={F} className="pointer propriedade-puzzle-lf" alt="" onClick={() => handleImageClick(F, "F")} />
                                                <div className="pointer propriedade-puzzle-slot-1 propriedade-puzzle-slot-lf" onClick={() => handleSlotClick("propriedade-puzzle-slot-lf")}></div>
                                                <img src={AnagramaPerto} className="propriedade-puzzle-slot" alt="" />
                                                <Row className="propriedade-puzzle-btns">
                                                    <Col>
                                                        <Button className="bg-marine-green pointer">Continue</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button className="bg-orange pointer" onClick={() => handleClearSlots()}>Clear</Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}
