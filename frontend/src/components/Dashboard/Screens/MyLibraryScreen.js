import React, { useState, useEffect, useContext } from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import User from "../User";

import Green from "../../../images/dashboard/read.png";
import Orange from "../../../images/dashboard/notRead.png";

import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

import { initialPlanData } from "../../../constants/MyLibraryScreen";

export default function MyLibrary(props) {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');

    const planData = initialPlanData;

    const [selectedText, setSelectedText] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedLiIndex, setSelectedLiIndex] = useState(-1); // Inicialmente nenhum item selecionado



    //const [clickedTopicIndexes, setClickedTopicIndexes] = useState([]);
    //const [completedTopics, setCompletedTopics] = useState(props.completed_topics || [0]);
    // Inicialize completedTopics com os tópicos concluídos do usuário

    const [completedTopics, setCompletedTopics] = useState(props.completed_topics);

    const handleLiClick = (index, title, text) => {
        setSelectedLiIndex(index);
        setSelectedTitle(title);
        setSelectedText(text || ""); // Use uma string vazia se o texto for undefined

        if (!completedTopics.includes(index)) {
            setCompletedTopics((prevTopics) => [...prevTopics, index]);
        }


        if (auth) {
            const updatedTopics = completedTopics;
            axios.patch(
                'http://localhost:5000/auth/updateCompletedTopics',
                { topics: updatedTopics },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Número de tópicos lidos atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o número de tópicos lidos:', error);
                });
        }
    };

    useEffect(() => {
        if (selectedLiIndex !== -1) {
            // Apenas chame handleLiClick se algum item foi selecionado
            handleLiClick(selectedLiIndex, selectedTitle, selectedText);
        }
    }, [auth, completedTopics, token]);

    return (


        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-gray-widgets m-2 p-2">
                    <Container>
                        <Row className="pt-2 pb-3 border-light-gray-bottom">
                            <User image={props.image} name={props.name} idea={props.idea} action={props.action} />
                        </Row>
                        <Row className="px-2 pt-4">
                            <p>Topics</p>
                        </Row>
                        <Row className="">
                            <div
                                className="pr-5"
                                style={{ maxHeight: "400px", overflowY: "auto" }}
                            >
                                <ul className="library-topics">
                                    {planData.map((data, index) => (
                                        <li
                                            key={index}
                                            className={`my-4 ${completedTopics.includes(index) ? "pointer text-green" : "pointer"}`}
                                            onClick={() => handleLiClick(index, data.title, data.text)}
                                        >
                                            <img src={completedTopics.includes(index) ? Green : Orange} className="mr-2" alt="" />
                                            <span className="">{data.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </Row>
                <Row className="dashboard-user-notifications-gray-widgets mt-4 m-2 p-3">
                    <Container>
                        <Row className="">
                            <Col md={4} className="text-right py3">
                                {/*<p>A LOGO<br />VAI AQUI</p>*/}
                            </Col>
                            <Col md={7} className="text-left pt-4">
                                <h4>Under construction</h4>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Col >
            <Col md={8} className="dashboard-panel">
                <Container className="business-plan my-2 p-2">
                    <p className="px-2 pt-2 pb-1 border-light-gray-bottom">Topic</p>
                    <h1 className="px-4 pt-2 pb-1">
                        <strong>{selectedTitle}</strong>
                    </h1>
                    <p className="px-4 pt-4 pb-1">
                        {selectedText.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </Container>
            </Col>
        </Row >
    );
};


