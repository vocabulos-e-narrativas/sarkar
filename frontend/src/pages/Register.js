import React from "react";
import {
    Row, Button, Col
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RegisterForm from "../components/RegisterForm";
import SideBar from "../components/SideBar";
import "../styles/style.css";




export default function Register() {
    const navigate = useNavigate();
    const user = {
        name: '',
        idea_name: '',
        email: '',
        password: '',
    };

    return (
        <Row className="register">
            <Col md={1}>
                <SideBar />
            </Col>
            <Col>
                <div className="text-white bg-gray p-5 border-light-gray-bottom">
                    <h1 className="px-5">Register</h1>
                </div>
                <div className="bg-dark-gray p-5">
                    <div className="bg-gray p-5 border-20 text-medium-white">
                        <span>
                            The registration information on the platform is essential to proceed with your virtual entrepreneurial journey.<br />
                            To proceed, please fill in the following fields:
                        </span>
                        <h4 className="my-5">Register</h4>
                        <RegisterForm
                            user={{ ...user }}
                        />
                    </div>
                    <Row className="p-5">
                        <Col md={9} />
                        <Col>
                            <Button className="bg-marine-green border-20" onClick={() => navigate('/login')} style={{ width: '100%', height: '60px' }}>
                                Iniciar Sessão
                            </Button>
                        </Col>
                        <Col md={1} />
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
