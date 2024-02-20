import React from "react";
import {
    Row,
    Col
} from "react-bootstrap";

import Back from "../images/materialpisopitch/sarkar_icones_dashboard-47.png";

export default function Title({ title, back, handleBackClick }) {

    const formattedName = title.replace(/([A-Z])/g, ' $1');
    // Convert the first letter to uppercase to create a title-like format
    const formattedTitle = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);


    return (
        <div className="text-white bg-gray px-3 py-4 border-light-gray-bottom">
            <Row className="h-half">
                <Col md={6}>
                    <h2 className="px-5"><strong>{formattedTitle}</strong></h2>
                </Col>
                {back &&
                    <>
                        <Col md={5} />
                        <Col md={1} onClick={handleBackClick}>
                            <img src={Back} className="h-50 mx-auto" alt="Back" />
                        </Col>
                    </>
                }
            </Row>
        </div>
    );
};