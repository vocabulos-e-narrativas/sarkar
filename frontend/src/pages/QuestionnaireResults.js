import React, { useState, useEffect, useContext } from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import FoxDark from "../images/materialpisopitch/fox_dark.png";
import FoxLight from "../images/materialpisopitch/fox_light.png";
import Fox from "../images/materialpisopitch/fox_big.png";
import BearDark from "../images/materialpisopitch/bear_dark.png";
import BearLight from "../images/materialpisopitch/bear_light.png";
import Bear from "../images/materialpisopitch/bear_big.png";
import WolfDark from "../images/materialpisopitch/wolf_dark.png";
import WolfLight from "../images/materialpisopitch/wolf_light.png";
import Wolf from "../images/materialpisopitch/wolf_big.png";
import SheepDark from "../images/materialpisopitch/sheep_dark.png";
import SheepLight from "../images/materialpisopitch/sheep_light.png";
import Sheep from "../images/materialpisopitch/sheep_big.png";

import SideBar from "../components/SideBar";
import Title from "../components/Title";

import axios from "axios";
import { AuthContext } from "../context/AuthProvider";

export default function QuestionnaireResults() {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    const [animal, setAnimal] = useState("Sheep");


    const animals = {
        "Wolf": {
            "Photo": Wolf,
            "Name": "Wolf",
            "Description":
                "The wolf represents the most aggressive and competitive\
                entrepreneur of all. Its creativity and organizational flexibility \
                allow it to quickly adapt to new market conditions. Its brand \
                has significant prestige, enabling it to create products that\
                easily differentiate it from competitors and put it in a leading \
                position in terms of marketshare. It has significant control \
                over its product prices, leading to higher margins and overall\
                profits compared to other profiles. It usually does not \
                encounter much competition in its market segment.",
            "HaveAreasToImprove": false
        },
        "Fox": {
            "Photo": Fox,
            "Name": "Fox",
            "Description":
                "The fox represents a more cautious entrepreneur, but still \
                creative nonetheless, coming just behind the wolf in this aspect, \
                as well as in organizational flexibility, prestige, and differentiation.\
                These characteristics allow it to face the strong competition it will \
                encounter, even though it results in lower market share, margins, and profits.\
                Despite having some prestige and being able to differentiate themselves from \
                the competition, it does not grant them much control over prices.",
            "HaveAreasToImprove": true,
            "AreasToImprove": "Profits, margin, market share, organizational flexibility"
        },
        "Bear": {
            "Photo": Bear,
            "Name": "Bear",
            "Description":
                "Among all archetypes, the bear is the most inconsistent. \
                Like the wolf, it faces little competition and has significant \
                control over its product prices, leading to a large market share \
                and the best margins and profits after the wolf. However, it is the \
                class with the lowest level of organizational flexibility, and its \
                creativity is not much superior to that of the sheep. This means it \
                does not differentiate itself much from the competition, resulting in low prestige.",
            "HaveAreasToImprove": true,
            "AreasToImprove": "Differentiation, prestige, profits, organizationalflexibility, creativity."
        },
        "Sheep": {
            "Photo": Sheep,
            "Name": "Sheep",
            "Description":
                "Not very creative and with a brand of low prestige and great difficulty in \
                differentiating itself, the sheep demonstrates less aggressive and innovative \
                behavior from the entrepreneur. Among all archetypes, it is the one that faces \
                the most competition, showing little organizational flexibility and the lowest \
                level of creativity. The low control over prices results in a small market share \
                and meager margins, leading to low profits.",
            "HaveAreasToImprove": true,
            "AreasToImprove": "Degree of competition, control overprices, differentiation, prestige, \
                profits, margin, marketshare, organizational, flexibility, creativity."
        },
    };

    const animalsImages = {
        "Wolf": {
            light: WolfLight,
            dark: WolfDark
        },
        "Fox": {
            light: FoxLight,
            dark: FoxDark
        },
        "Bear": {
            light: BearLight,
            dark: BearDark
        },
        "Sheep": {
            light: SheepLight,
            dark: SheepDark
        },
    };


    const getDiagnosis = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getDiagnosis', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log(res.data.diagnosis);
                    setAnimal(res.data.diagnosis);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getDiagnosis();
    }, [auth, token]);

    return (
        <Row className="">
            <Col md={1}>
                <SideBar />
            </Col>
            <Col>
                <Title title={"Diagnosis result"} back={false} />
                <div className="diagnosis_result_bg bg-dark-gray p-3 text-white ">
                    <Container>
                        <Row className="my-5">
                            <Col md={4} />
                            {Object.keys(animals).map((animalName) => (
                                <Col md={1} key={animalName}>
                                    <img
                                        src={
                                            animal === animalName
                                                ? animalsImages[animalName].light
                                                : animalsImages[animalName].dark
                                        }
                                        className=""
                                        alt=""
                                    />
                                </Col>
                            ))}
                            <Col md={4} />
                        </Row>
                    </Container>
                    <Container className="diagnosis_result bg-gray py-5">
                        <Row>
                            <Col className="pl-5">
                                <img src={animals[animal].Photo} className="animal-image py-5" alt="" />
                            </Col>
                            <Col className="pr-5 text-left">
                                <h2>{animals[animal].Name}</h2>
                                <p>
                                    {animals[animal].Description}
                                </p>
                                {animals[animal].HaveAreasToImprove && (
                                    <div>
                                        <h4>Areas to improve</h4>
                                        <p>
                                            {animals[animal].AreasToImprove}
                                        </p>
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Container>
                    <Container className="pt-5">
                        <Row>
                            <Col md={5} />
                            <Col className="">
                                <button className="pointer w-100 diagnosis_button text-white pt-3" onClick={() => navigate("/dashboard")}>
                                    <p>Next</p>
                                </button>
                            </Col>
                            <Col md={5} />
                        </Row>
                    </Container>
                </div >
            </Col >
        </Row >
    );
}