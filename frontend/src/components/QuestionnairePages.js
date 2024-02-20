import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import RangeInput from "../components/RangeInput";

import axios from "axios";
import { AuthContext } from "../context/AuthProvider";

export default function QuestionnairePages({ pageNumber, onPageScoreChange, onNextPage, onPreviousPage, questions, totalScore }) {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    const [answers, setAnswers] = useState(Array(questions.length).fill(0));


    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);

        const newPageScore = newAnswers.reduce((total, score) => total + score, 0);
        onPageScoreChange(pageNumber - 1, newPageScore); // Update the page score
    };


    const renderQuestions = () => {
        return questions.map((question, index) => (
            <div key={index} className="py-2 px-5">
                <p className="question">{question}</p>
                <RangeInput
                    value={answers[index]}
                    onChange={(value) => handleAnswerChange(index, value)}
                />
            </div>
        ));
    };

    const handleNextButtonClick = () => {
        if (pageNumber === 3) {
            console.log(totalScore);
            updateDiagnosis(totalScore); // Passa o totalScore para a função
            navigate("/questionnaire/results");
        } else {
            onNextPage(pageNumber + 1); // Pass the next page number as an argument
        }
    };

    const updateDiagnosis = (totalScore) => {
        let diagnosisToUpdate = "";

        if (totalScore >= 114 && totalScore <= 150) {
            diagnosisToUpdate = "Wolf";
        } else if (totalScore >= 76 && totalScore <= 113) {
            diagnosisToUpdate = "Fox";
        } else if (totalScore >= 38 && totalScore <= 75) {
            diagnosisToUpdate = "Bear";
        } else if (totalScore >= 0 && totalScore <= 37){
            diagnosisToUpdate = "Sheep";
        }

        console.log("diagnosisToUpdate: ", diagnosisToUpdate);
        if (auth) {
            axios.patch(
                'http://localhost:5000/auth/updateDiagnosis',
                { diagnosis: diagnosisToUpdate },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Diagnosis atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o Diagnosis:', error);
                });
        }

    };

    useEffect(() => {
    }, [auth, token]);


    return (
        <div className="dashboard-questionnaire py-4">
            <div className="border-light-gray-bottom mb-3">
                <Row className="text-center px-3">
                    <Col className={`pt-4 ml-5 ${pageNumber === 1 ? "selected-questionnaire" : ""}`}>
                        <p>Market Pressure</p>
                    </Col>
                    <Col className={`pt-4 ${pageNumber === 2 ? "selected-questionnaire" : ""}`}>
                        <p>Product Differentiation</p>
                    </Col>
                    <Col className={`pt-4 mr-5 ${pageNumber === 3 ? "selected-questionnaire" : ""}`}>
                        <p>Market Performance</p>
                    </Col>
                </Row>
            </div>
            {renderQuestions()}
            <Row className="questions mx-4 my-2">
                <Col md={2}>
                    <button className="pointer w-100 bg-orange text-white py-3" onClick={onPreviousPage} disabled={pageNumber === 1}>
                        <p>Anterior</p>
                    </button>
                </Col>
                <Col md={2}>
                    {pageNumber === 3 ?
                        <button className="pointer w-100 bg-green text-white py-1" onClick={handleNextButtonClick}>
                            <p>Submeter Diagnóstico</p>
                        </button>
                        :
                        <button className="pointer bg-green text-white py-3" onClick={handleNextButtonClick} disabled={pageNumber === 3}>
                            <p>Seguinte</p>
                        </button>
                    }
                </Col>
                <Col />
            </Row>
        </div>
    );
}
