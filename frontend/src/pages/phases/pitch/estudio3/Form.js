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
        apresentacao: 0,
        identificacao: 0,
        solucao: 0,
        proposta: 0,
        total: 0
    });

    const [selectedOption, setSelectedOption] = useState("1 minute");

    const [proporcao, setProporcao] = useState({
        apresentacao: 20,
        identificacao: 85,
        solucao: 95,
        proposta: 100
    });

    const countWords = (textareaId) => {
        const textarea = document.getElementById(textareaId);
        const text = textarea.value.trim();
        const words = text.split(/\s+/); // split text by whitespace
        const count = words.length;

        setWordCounts(prevCounts => ({
            ...prevCounts,
            [textareaId]: count,
            total: prevCounts.apresentacao + prevCounts.identificacao + prevCounts.solucao + prevCounts.proposta
        }));
        console.log("wordCounts: ", wordCounts);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        switch (option) {
            case "1 minute":
                setProporcao({
                    apresentacao: 20,
                    identificacao: 85,
                    solucao: 95,
                    proposta: 100
                });
                break;
            case "3 minutes":
                setProporcao({
                    apresentacao: 30,
                    identificacao: 120,
                    solucao: 130,
                    proposta: 170
                });
                break;
            case "5 minutes":
                setProporcao({
                    apresentacao: 90,
                    identificacao: 150,
                    solucao: 160,
                    proposta: 200
                });
                break;
            default:
                setProporcao({
                    apresentacao: 20,
                    identificacao: 85,
                    solucao: 95,
                    proposta: 100
                });
        }
    };

    const getMessageBasedOnOption = () => {
        let minutes;
        let words;

        switch (selectedOption) {
            case "1 minute":
                minutes = 1;
                words = 300;
                break;
            case "3 minutes":
                minutes = 3;
                words = 450;
                break;
            case "5 minutes":
                minutes = 5;
                words = 600;
                break;
            default:
                minutes = 1;
                words = 300;
        }

        return `You have selected the option of a ${minutes} minute pitch, which corresponds to ${words} words. Based on that, fill in the following fields of your pitch:`;
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
            const maxCompletedPhases = Math.max(completedPhases, 1);
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
            const maxCompletedChallenges = Math.max(completedChallenges, 3);
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

    const getPitchForm = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getPitchForm', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("res.data: ", res.data);
                    setAns(res.data);
                    // Verifique se todas as respostas do formulário não estão vazias
                    if (res.data.pitch_form_1 && res.data.pitch_form_2 && res.data.pitch_form_3 && res.data.pitch_form_4) {
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

    const updatePitchForm = () => {
        if (auth) {
            axios.patch(
                'http://localhost:5000/auth/updatePitchForm',
                {
                    pitch_form_1: ans.ans_1,
                    pitch_form_2: ans.ans_2,
                    pitch_form_3: ans.ans_3,
                    pitch_form_4: ans.ans_4
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
        getPitchForm();
        getCompletedPhases();
        getCompletedChallenges();
    }, [auth, token]);

    const [message, setMessage] = useState('You have already submitted the form.');
    const [showMessage, setShowMessage] = useState(false);

    return (
        <>
            <img src={Frame} className="frame-estudio3" />
            <div className="frame-container text-white pt-4">
                <div className="p-5">
                    <Container className="my-5 estrutura-title ">
                        {showMessage && <div className="alert alert-danger alert-font text-center mb-3">{message}</div>}
                        <h2>The Perfect Pitch</h2>
                        <p className="mt-4">
                            It's time for you to make your own pitch proposal. To start, select the duration you want for the presentation:
                        </p>
                        <form className="form-estudio3 mx-3" action="" onSubmit={updatePitchForm}>
                            <Row>
                                <label className={`container radio-container pointer ${showMessage ? "not-allowed-cursor" : ""}`}>
                                    <input
                                        type="radio"
                                        checked={selectedOption === "1 minute"}
                                        name="radio"
                                        onChange={() => handleOptionChange("1 minute")}
                                        disabled={showMessage}
                                    />
                                    <span class="radio-span ml-3">1 minute</span>
                                </label>
                                <label className={`container radio-container pointer ${showMessage ? "not-allowed-cursor" : ""}`}>
                                    <input
                                        type="radio"
                                        checked={selectedOption === "3 minutes"}
                                        name="radio"
                                        onChange={() => handleOptionChange("3 minutes")}
                                        disabled={showMessage}
                                    />
                                    <span class="radio-span ml-3">3 minutes</span>
                                </label>
                                <label className={`container radio-container pointer ${showMessage ? "not-allowed-cursor" : ""}`}>
                                    <input
                                        type="radio"
                                        checked={selectedOption === "5 minutes"}
                                        name="radio"
                                        onChange={() => handleOptionChange("5 minutes")}
                                        disabled={showMessage}
                                    />
                                    <span class="radio-span ml-3">5 minutes</span>
                                </label>
                            </Row>

                            <Row>
                                <p className="mt-4">
                                    {getMessageBasedOnOption()}
                                </p>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Presentation (recommended: maximum of {proporcao.apresentacao} words):</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    value={ans.ans_1}
                                    id="apresentacao"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("apresentacao");
                                        setAns({ ...ans, ans_1: e.target.value }); // Usar event.target.value para obter o novo valor do textarea
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.apresentacao}</span>/{proporcao.apresentacao}</span>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Problem Identification (recommended: maximum of {proporcao.identificacao} words):</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    value={ans.ans_2}
                                    id="identificacao"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("identificacao");
                                        setAns({ ...ans, ans_2: e.target.value });
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.identificacao}</span>/{proporcao.identificacao}</span>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Solution (recommended: maximum of {proporcao.solucao} words):</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    value={ans.ans_3}
                                    id="solucao"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("solucao");
                                        setAns({ ...ans, ans_3: e.target.value });
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.solucao}</span>/{proporcao.solucao}</span>
                            </Row>

                            <Row>
                                <label htmlFor="" className="">
                                    <p className="mt-4">Value Proposition (recommended: maximum of {proporcao.proposta} words):</p>
                                </label>
                            </Row>
                            <Row>
                                <textarea
                                    value={ans.ans_4}
                                    id="proposta"
                                    name=""
                                    placeholder="Write something.."
                                    onChange={(e) => {
                                        countWords("proposta");
                                        setAns({ ...ans, ans_4: e.target.value });
                                    }}
                                    disabled={showMessage}
                                    className={showMessage ? "not-allowed-cursor" : ""}
                                />
                                <span className="individual-word-counter pt-2"><span className="text-orange">{wordCounts.proposta}</span>/{proporcao.proposta}</span>
                            </Row>
                            {/* words selecionado */}
                            {wordCounts.apresentacao > proporcao.apresentacao && (
                                <p className="mt-4">
                                    Your pitch presentation has <span className="word-counter">{wordCounts.apresentacao}</span> words. You have exceeded the recommended word limit. Consider revising the text.
                                </p>
                            )}

                            {wordCounts.identificacao > proporcao.identificacao && (
                                <p className="mt-4">
                                    Your pitch identification has <span className="word-counter">{wordCounts.identificacao}</span> words. You have exceeded the recommended word limit. Consider revising the text.
                                </p>
                            )}

                            {wordCounts.solucao > proporcao.solucao && (
                                <p className="mt-4">
                                    Your pitch solution has <span className="word-counter">{wordCounts.solucao}</span> words. You have exceeded the recommended word limit. Consider revising the text.
                                </p>
                            )}

                            {wordCounts.proposta > proporcao.proposta && (
                                <p className="mt-4">
                                    Your pitch proposal has <span className="word-counter">{wordCounts.proposta}</span> words. You have exceeded the recommended word limit. Consider revising the text.
                                </p>
                            )}

                            {wordCounts.apresentacao <= proporcao.apresentacao &&
                                wordCounts.identificacao <= proporcao.identificacao &&
                                wordCounts.solucao <= proporcao.solucao &&
                                wordCounts.proposta <= proporcao.proposta && (
                                    <p className="mt-4">
                                        Congratulations! You managed to write a very effective pitch, using the appropriate number of words.
                                    </p>
                                )}
                            {wordCounts.total >= 300 && (
                                <p className="mt-4">
                                    Your pitch has <span className="word-counter">{wordCounts.total}</span> words. You have exceeded the recommended word limit. Consider revising the text.
                                </p>
                            )}

                            <div className="text-center mt-5 text-end">
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
