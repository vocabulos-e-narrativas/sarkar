import React, { useState, useEffect } from 'react';
import {
    Row,
    Col
} from "react-bootstrap";

import progress from "../../../images/materialpisopitch/material_separado_pitch-09.png";

export default function Timer() {
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        }
        if (seconds == 0) {
            window.location.href = '../../../phases/pitch/pitchHall';
        }
    }, [seconds]);

    let color = "green";
    if (seconds <= 30 && seconds > 15) {
        color = "orange";
    } else if (seconds <= 15) {
        color = "red";
    }


    return (
        <Row>
            <Col>
                <img src={progress} style={{ width: "400px", height: "50px" }} />
                <div style={{ width: `${(seconds / 60) * 100}%`, backgroundColor: color, height: '50px', borderRadius: '10px' }}></div>
            </Col>
            <Col md={1} />
            <Col>
                <h1 className="timer-container-bg">{seconds}</h1>
            </Col>
        </Row>
    );
};

