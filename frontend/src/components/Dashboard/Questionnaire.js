import { React } from "react";

import {
    Row,
    Col
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import FoxDark from "../../images/materialpisopitch/fox_dark.png";
import FoxLight from "../../images/materialpisopitch/fox_light.png";
import BearDark from "../../images/materialpisopitch/bear_dark.png";
import BearLight from "../../images/materialpisopitch/bear_light.png";
import WolfDark from "../../images/materialpisopitch/wolf_dark.png";
import WolfLight from "../../images/materialpisopitch/wolf_light.png";
import SheepDark from "../../images/materialpisopitch/sheep_dark.png";
import SheepLight from "../../images/materialpisopitch/sheep_light.png";

export default function Questionnaire({ diagnosis }) {

    const navigate = useNavigate();

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

    return (
        <>
            <Row className="pt-2">
                <h5>Sarkar Diagnosis - <span className="text-orange">{diagnosis}</span></h5>
            </Row>
            <Row className="mt-3 mb-4">
                {Object.keys(animalsImages).map((animalName) => (
                    <Col key={animalName}>
                        <img
                            src={
                                diagnosis === animalName
                                    ? animalsImages[animalName].light
                                    : animalsImages[animalName].dark
                            }
                            className="w-100 my-auto"
                            alt=""
                        />
                    </Col>
                ))}
                <Col md={2} />
            </Row>
            <Row className="pb-2 pt-2">
                <div className="text-center redo-questionnaire pointer" onClick={() => navigate("/questionnaire")}>
                    <p className="my-auto">Redo Questionnaire</p>
                </div>
            </Row>
        </>
    );
}