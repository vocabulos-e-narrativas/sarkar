import React, { useContext, useState, useEffect } from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import User from "../User";
import Notifications from "../Notifications";

import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

import { planData } from "../../../constants/BusinessPlanScreen";

export default function BusinessPlanScreen(props) {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');

    const [selectedText, setSelectedText] = useState(planData[0].text);
    const [selectedTitle, setSelectedTitle] = useState(planData[0].title);
    const [selectedImage, setSelectedImage] = useState(planData[0].image);

    const [selectedLiIndex, setSelectedLiIndex] = useState(Math.max(props.completedSteps - 1, 0));
    const [maxClickableIndex, setMaxClickableIndex] = useState(Math.max(props.completedSteps, 1));
    // Criar um Set inicial com valores de 0 até props.completedSteps - 1
    const flag = props.completedSteps === 0 ? props.completedSteps + 1 : props.completedSteps;
    const initialClickedTitles = new Set([...Array(flag).keys()]);

    const [clickedTitles, setClickedTitles] = useState(initialClickedTitles);

    const handleLiClick = (title, index) => {
        if (index <= maxClickableIndex) {
            setSelectedLiIndex(index);
            setSelectedTitle(title);
            setSelectedText(planData[index].text);
            setSelectedImage(planData[index].image);
            if (!clickedTitles.has(index)) {
                setClickedTitles(prevTitles => new Set(prevTitles).add(index));
                setMaxClickableIndex(index + 1);
            }
        }
        console.log("index: ", selectedLiIndex);
        console.log("max: ", maxClickableIndex);
        console.log("clickedTitles: ", clickedTitles);

        if (auth) {
            const updatedSteps = Math.max(props.completedSteps, clickedTitles.size);
            axios.patch(
                'http://localhost:5000/auth/updateCompletedSteps',
                { steps: updatedSteps },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Número de etapas concluídas atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o número de etapas concluídas:', error);
                });
        }

    };

    useEffect(() => {
        handleLiClick();
    }, [auth, clickedTitles, token]);



    return (
        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-gray-widgets m-2 p-2">
                    <Container>
                        <Row className="pt-2 pb-3 border-light-gray-bottom">
                            <User image={props.image} name={props.name} idea={props.idea} action={props.action} />
                        </Row>
                        <Row className="px-5 pt-4">
                            <p>Steps</p>
                        </Row>
                        <Row className="px-2">
                            <div
                                className="pr-5"
                                style={{ maxHeight: "400px", overflowY: "auto" }}
                            >
                                <ul>
                                    {planData.map((data, index) => (
                                        <li
                                            key={index}
                                            className={`my-4 ${index === selectedLiIndex ? "pointer text-orange" : "pointer"} ${index > maxClickableIndex ? "not-clickable" : ""}`}
                                            onClick={() => handleLiClick(data.title, index)}
                                        >
                                            {data.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </Row>
                <Row className="dashboard-user-notifications-gray-widgets mt-4 m-2 p-3">
                    <Container>
                        <Notifications />
                    </Container>
                </Row>
            </Col >
            <Col md={8} className="dashboard-panel">
                <Container className="business-plan my-2 p-2">
                    <p className="px-2 pt-2 pb-1 border-light-gray-bottom">Business Plan</p>
                    <h1 className="px-4 pt-2 pb-1">
                        {selectedTitle}
                    </h1>
                    <div
                        className="pt-2 pb-1"
                        style={{ maxHeight: "600px", overflowY: "auto" }}
                    >
                        <p className="px-4 pt-2 pb-1">
                            {selectedText.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <div className="text-center mt-5">
                            <img src={selectedImage} class="mt-5" alt="" />
                        </div>
                    </div>
                </Container>
            </Col>
        </Row >
    );
};


