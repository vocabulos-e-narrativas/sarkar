import { React } from "react";

import {
    Row,
    Col
} from "react-bootstrap";

import SettingsImage from "../../images/dashboard/configuracoes.png";

export default function User({ image, name, idea, action }) {

    let nameFontSize = "24px"; // Tamanho de fonte padrão
    if (name) {
        if (name.length > 14) {
            nameFontSize = "18px"; // Tamanho de fonte menor para nomes longos
        }
    }

    const nameStyle = {
        fontSize: nameFontSize,
    };
    return (
        <>
            <Col md={2} className="">
                <img src={image} className="userImage" alt="" />
            </Col>
            <Col md={8} className="my-auto pl-6 user-name-ideaName">
                <h3 className="name" style={nameStyle}>{name}</h3>
                <span className="ideaName">{idea}</span>
            </Col>
            <Col md={2} className="text-center my-auto">
                <img src={SettingsImage} className="settingsImage pointer" alt="" onClick={action} />
            </Col>
        </>
    );
}