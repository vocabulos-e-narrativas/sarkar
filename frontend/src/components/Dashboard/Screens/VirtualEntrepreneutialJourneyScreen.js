import React from "react";
import {
    Row,
    Col,
    Container
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Profile from "../../../components/Dashboard/Profile";
import Notifications from "../../../components/Dashboard/Notifications";
import UserImage from "../../../images/materialpisopitch/userPhoto.png";
import Start from "../../../images/materialpisopitch/botão_start-46.png";
import StartNext from "../../../images/materialpisopitch/start_new.png";
import Locked from "../../../images/materialpisopitch/locked.png";

import { enterFullscreen } from "../../../scripts/enterFullscreen";

export default function VirtualEntrepreneutialJourneyScreen(props) {

    const navigate = useNavigate();

    const phase = props.completed_phases;

    const phases = {
        "Pitch": {
            phaseUrl: "../phases/pitch/PitchHall",
            unlocked: phase >= 1,
            next: phase === 0,
        },
        "Propriedade Intelectual": {
            phaseUrl: "../phases/propriedade/PropriedadeHall",
            unlocked: phase >= 2,
            next: phase === 1,
        },
        "Gestão e Liderança": {
            unlocked: phase >= 3,
            next: phase === 2,
        },
        "Inovação": {
            unlocked: phase >= 4,
            next: phase === 3,
        },
        "Prototipagem": {
            unlocked: phase >= 5,
            next: phase === 4,
        },
        "To be revealed": {
            unlocked: phase >= 6,
            next: phase === 5,
        },
    };

    const phaseElements = Object.keys(phases).map(phaseName => (
        <Col key={phaseName} md={3} className={`flex-grow-1 ${phases[phaseName].unlocked ? "bg-journey-green my-2 mx-4" : "bg-journey-orange my-2 mx-4"}`}>
            <Row className="px-3 pt-3 text-center">
                <p>{phaseName}</p>
            </Row>
            <Row className="">
                {phases[phaseName].unlocked ? (
                    <img src={Start} className="start-btn pointer" alt="" onClick={() => { navigate(phases[phaseName].phaseUrl); enterFullscreen(); }} />
                ) : (
                    phases[phaseName].next ? (
                        <img src={StartNext} className="start-btn pointer" alt="" onClick={() => { navigate(phases[phaseName].phaseUrl); enterFullscreen(); }} />
                    ) : (
                        <img src={Locked} className="start-btn" alt="" />
                    )
                )}
            </Row>
        </Col>
    ));

    return (
        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-widgets m-2 p-2">
                    <Container>
                        <Profile
                            image={UserImage}
                            name={props.name}
                            idea={props.idea}
                            diagnosis={props.diagnosis}
                            completedChallenges={props.completedChallenges}
                            action={props.action}
                        />
                    </Container>
                </Row>
                <Row className="dashboard-user-notifications mt-4 m-2 p-3">
                    <Container>
                        <Notifications />
                    </Container>
                </Row>
            </Col>
            <Col md={8} className="d-flex flex-wrap custom-row" style={{ maxHeight: "680px", width: "100%", overflowY: "auto" }}>
                {phaseElements}
            </Col>
        </Row>
    );
}
