import React, { useState, useEffect, useContext } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import Frame from "../../../../images/materialpisopitch/sarkar_pitch_fundo-51.png";

import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { AuthContext } from "../../../../context/AuthProvider";

export default function Form() {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const [wordCounts, setWordCounts] = useState({
        propriedadeIntelectualApresentacao: 0,
        propriedadeIntelectualIdentificacao: 0,
        propriedadeIntelectualSolucao: 0,
        propriedadeIntelectualProposta: 0,
        total: 0
    });


    const countWords = (textareaId) => {
        const textarea = document.getElementById(textareaId);
        const text = textarea.value.trim();
        const words = text.split(/\s+/); // split text by whitespace
        const count = words.length;

        setWordCounts(prevCounts => ({
            ...prevCounts,
            [textareaId]: count,
            total: prevCounts.propriedadeIntelectualApresentacao + prevCounts.propriedadeIntelectualIdentificacao + prevCounts.propriedadeIntelectualSolucao + prevCounts.propriedadeIntelectualProposta
        }));
    };

    const [completedPhases, setCompletedPhases] = useState(0);
    const [completedChallenges, setCompletedChallenges] = useState(0);

    const getCompletedPhases = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getCompletedPhases', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log(res.data.completed_phases);
                    setCompletedPhases(res.data.completed_phases);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

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

    const completePhase = () => {
        if (auth) {
            const maxCompletedPhases = Math.max(completedPhases, 2);
            axios.patch(
                'http://localhost:5000/auth/updateCompletedPhases',
                { phases: maxCompletedPhases },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Número de fases concluídas atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o número de fases concluídas:', error);
                });
        }

    };

    const completeChallenge = () => {
        if (auth) {
            const maxCompletedChallenges = Math.max(completedChallenges, 6);
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

    const [ans, setAns] = useState({
        ans_1: '',
        ans_2: '',
        ans_3: '',
        ans_4: ''
    });

    const getPropriedadeForm = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getPropriedadeForm', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("res.data: ", res.data);
                    setAns(res.data);
                    // Verifique se todas as respostas do formulário não estão vazias
                    if (res.data.propriedade_form_1 && res.data.propriedade_form_2 && res.data.propriedade_form_3 && res.data.propriedade_form_4) {
                        setShowMessage(true);
                    } else {
                        setShowMessage(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const updatePropriedadeForm = () => {
        if (auth) {
            axios.patch(
                'http://localhost:5000/auth/updatePropriedadeForm',
                {
                    propriedade_form_1: ans.ans_1,
                    propriedade_form_2: ans.ans_2,
                    propriedade_form_3: ans.ans_3,
                    propriedade_form_4: ans.ans_4
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Respostas do formulário atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar as respostas do formulário: ', error);
                });
        }

    };

    useEffect(() => {
        getPropriedadeForm();
        getCompletedPhases();
        getCompletedChallenges();
    }, [auth, token]);

    const [message, setMessage] = useState('You have already submitted the form.');
    const [showMessage, setShowMessage] = useState(false);

    return (
        <>
            <img src={Frame} className="propriedade-frame-estudio3" />
            <div className="frame-container text-white pt-4">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        {showMessage && <div className="alert alert-danger alert-font text-center mb-3">{message}</div>}
                        <h2>Your business idea</h2>
                        <p className="mt-4">
                            Regarding your business idea:
                        </p>
                        <form className="form-estudio3 mx-3" action="" onSubmit={updatePropriedadeForm}>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Identify the products or processes that you should protect intellectual property for:</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    value={ans.ans_1}
                                    id="propriedadeIntelectualApresentacao"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("propriedadeIntelectualApresentacao");
                                        setAns({ ...ans, ans_1: e.target.value }); // Usar event.target.value para obter o novo valor do textarea
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.propriedadeIntelectualApresentacao}</span>/30</span>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Of the products or processes you indicated, do you think it is useful to create an explicit copyright notice? If yes, which one(s)?</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    id="propriedadeIntelectualIdentificacao"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("propriedadeIntelectualIdentificacao");
                                        setAns({ ...ans, ans_2: e.target.value });
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.propriedadeIntelectualIdentificacao}</span>/30</span>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Do you consider creating a registered trademark or trademark for the company name or any of its products? If yes, describe the elements you consider registering.</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    id="propriedadeIntelectualSolucao"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("propriedadeIntelectualSolucao");
                                        setAns({ ...ans, ans_3: e.target.value });
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.propriedadeIntelectualSolucao}</span>/30</span>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Do you plan to register a patent for any of the processes or products you intend to create? If so, which ones and why?</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    id="propriedadeIntelectualProposta"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("propriedadeIntelectualProposta");
                                        setAns({ ...ans, ans_4: e.target.value });
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.propriedadeIntelectualProposta}</span>/30</span>
                            </Row>
                            <p className="mt-4">
                                Based on the provided PDF document <a href="">here</a>, create an example declaration for the defense of the company's intellectual property, intended for potential employees of your company.
                            </p>
                            <div className="text-center text-end">
                                {showMessage ?
                                    <Button type="submit" className="mt-5 btn bg-marine-green border-20" style={{ width: '15%', height: '60px' }} onClick={() => navigate('../dashboard')}>
                                        Exit
                                    </Button>
                                    :
                                    <Button type="submit" className="mt-5 btn bg-marine-green border-20" style={{ width: '15%', height: '60px' }} onClick={() => { completePhase(); completeChallenge(); }}>
                                        Save and exit
                                    </Button>
                                }
                            </div>
                        </form>
                    </Container>
                </div>
            </div>
        </>
    );
}
