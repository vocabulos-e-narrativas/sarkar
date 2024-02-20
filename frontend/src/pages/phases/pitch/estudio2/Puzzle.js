import React, { useState, useEffect, useContext } from "react";
import Sala2DentroPerto from "../../../../images/materialpisopitch/material_separado_pitch-55.png";
import AvisoModal from "../../../../components/Modals/pitch/Estudio2/AvisoModal";
import SucessModal from "../../../../components/Modals/pitch/Estudio2/SucessModal";
import FailModal from "../../../../components/Modals/pitch/Estudio2/FailModal";
import {
    Button,
    Container,
    Row,
    Col
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import SetaFillUp from "../../../../images/materialpisopitch/material_separado_pitch-56.png";
import SetaFillDown from "../../../../images/materialpisopitch/material_separado_pitch-59.png";
import SetaUp from "../../../../images/materialpisopitch/material_separado_pitch-58.png";
import SetaDown from "../../../../images/materialpisopitch/material_separado_pitch-57.png";

import axios from "axios";
import { AuthContext } from "../../../../context/AuthProvider";

export default function Puzzle() {
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');
    const [completedChallenges, setCompletedChallenges] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSucess, setIsOpenSucess] = useState(false);
    const [isOpenFail, setIsOpenFail] = useState(false);
    const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]); // Ordem inicial das linhas

    /*
    - "Olá, o meu nome é Miguel e sou fundador da empresa de dispositivos tecnológicos NewVision.",
    - "Identificámos que o mercado ainda não dá resposta a uma necessidade de tornar mais realistas as chamadas por videoconferência e viemos mudar isso.",
    - "A nossa solução pode ter um impacto significativo na redução de casos de depressão e é uma solução importante no combate ao isolamento social.",
    - "É uma solução que revolucionará a vida das pessoas, principalmente das que vivem mais isoladas e sentem a solidão mais de perto.",
    - "No nosso modelo mais recente de smartwatch apresentamos a possibilidade de fazer chamadas holográficas, para que o impacto da presença da pessoa para quem se liga seja o mais realista possível.",
    - "Quando poderemos falar um pouco mais pormenorizadamente sobre os detalhes deste projeto?"
    */

    const lines = [
        "It is a solution that will revolutionize the lives of people, especially those who live in isolation and feel loneliness more closely.",
        "Hello, my name is Miguel, and I am the founder of NewVision, a technology device company.",
        "Our solution can have a significant impact on reducing cases of depression and is an important tool in combating social isolation.",
        "In our latest model of smartwatch, we introduce the possibility of making holographic calls, aiming to make the presence of the person being called as realistic as possible.",
        "When can we discuss the details of this project in more depth?",
        "We have identified that the market is still lacking a solution to make video conference calls more realistic, and we are here to change that.",
    ];

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
            const maxCompletedChallenges = Math.max(completedChallenges, 2);
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

    useEffect(() => {
        setIsOpen(true);
        getCompletedChallenges();
    }, [auth, token]);

    const moveLineUp = (index) => {
        if (index > 0) {
            const newOrder = [...order];
            const temp = newOrder[index];
            newOrder[index] = newOrder[index - 1];
            newOrder[index - 1] = temp;
            setOrder(newOrder);
        }
    };

    const moveLineDown = (index) => {
        if (index < order.length - 1) {
            const newOrder = [...order];
            const temp = newOrder[index];
            newOrder[index] = newOrder[index + 1];
            newOrder[index + 1] = temp;
            setOrder(newOrder);
        }
    };

    const validateOrder = () => {
        const correctOrder = [1, 5, 2, 0, 3, 4]; // Ordem correta dos textos
        for (let i = 0; i < order.length; i++) {
            if (order[i] !== correctOrder[i]) {
                return false; // A ordem está incorreta
            }
        }
        return true; // A ordem está correta
    };

    const isOrderCorrect = validateOrder();

    return (
        <div className="img-container">
            <img src={Sala2DentroPerto} className="img-100" alt="" />
            {isOpen ? (
                <AvisoModal setIsOpen={setIsOpen} />
            ) : (
                <>
                    <Container className="estudio2-puzzle text-white">
                        {order.map((lineIndex, idx) => (
                            <Row key={lineIndex}>
                                <Col md={1}>
                                    <Row>
                                        <Col className="pointer">
                                            <img
                                                src={idx === 0 ? SetaUp : SetaFillUp}
                                                alt=""
                                                onClick={() => moveLineUp(idx)}
                                            />
                                        </Col>
                                        <Col className="pointer">
                                            <img
                                                src={idx === order.length - 1 ? SetaDown : SetaFillDown}
                                                alt=""
                                                onClick={() => moveLineDown(idx)}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={1} />
                                <Col className="">
                                    <p>{lines[lineIndex]}</p>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                    <Row>
                        <div className="estudio2-puzzle-button">
                            {isOrderCorrect ?
                                <Button className="bg-marine-green pointer" onClick={() => { { completeChallenge(); setIsOpenSucess(true) } }}>Validate</Button>
                                :
                                <Button className="bg-orange pointer" onClick={() => setIsOpenFail(true)}>Validate</Button>
                            }
                        </div>
                    </Row>
                </>
            )
            }
            {isOpenSucess && <SucessModal setIsOpen={setIsOpenSucess} />}
            {isOpenFail && <FailModal setIsOpen={setIsOpenFail} />}
        </div >
    );
}
