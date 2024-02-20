import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../styles/style.css";
import SideBar from "../components/SideBar";

import LoadingScreen from '../components/LoadingScreen';


export default function Homepage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simule um tempo de carregamento usando um timeout
        setTimeout(() => {
            setLoading(false);
        }, 2500); // Defina aqui o tempo de carregamento desejado em milissegundos
    }, []);

    return (
        <>
            {loading ?
                <LoadingScreen />
                :
                <Row>
                    <Col md={1}>
                        <SideBar />
                    </Col>
                    <Col>
                        <div className="loginAndRegister d-flex justify-content-center align-items-center">
                            <Row className="my-3">
                                <div className="loginAndRegisterBorder text-center px-3 py-2 pointer" onClick={() => navigate("/register")}>
                                    <h2 className="my-1">Register</h2>
                                </div>
                            </Row>
                            <Row className="my-3">
                                <div className="loginAndRegisterBorder text-center px-3 py-2 pointer" onClick={() => navigate("/login")}>
                                    <h2 className="my-1">Login</h2>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            }
        </>
    );
}
