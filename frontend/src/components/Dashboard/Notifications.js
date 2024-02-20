import React from "react";
import { Row } from "react-bootstrap";

export default function Notifications() {
    return (
        <>
            <Row><p>Notifications</p></Row>
            <Row>
                <span>lorem ipsum</span><p className="mx-4 text-orange">|</p><span>Lorem ipsum</span>
            </Row>
        </>
    );
}
