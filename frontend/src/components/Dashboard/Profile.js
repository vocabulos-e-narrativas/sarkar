import React from "react";
import { Col, Row } from "react-bootstrap";

import Questionnaire from "../Dashboard/Questionnaire";
import CompletedChallenges from "../Dashboard/CompletedChallenges";
import User from "./User";

export default function Profile(props) {
    return (
        <>
            <Row className="pt-2 pb-3 border-light-gray-bottom">
                <User image={props.image} name={props.name} idea={props.idea} action={props.action} />
            </Row>
            <Row className="px-5 py-4">
                <Row className="py-4">
                    <Questionnaire diagnosis={props.diagnosis} />
                </Row>
                <Row className="py-4">
                    <CompletedChallenges completedChallenges={props.completedChallenges} />
                </Row>
            </Row>
        </>
    );
}
