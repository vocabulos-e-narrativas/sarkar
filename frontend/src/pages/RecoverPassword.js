import React, { useEffect, useState } from 'react';
import {
    Button,
    Row,
    Col
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SideBar from "../components/SideBar";
import "../styles/style.css";
// import axios from 'axios';


export default function RecoverPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showEmailSuccess, setShowEmailSuccess] = useState(false);
    const [message, setMessage] = useState('Introduza o seu email.');
    /*
    const recoverPassword = async (e) => {
        setShowEmailSuccess(false);
        setShowEmailError(false);
        e.preventDefault();
        if (email) {
            axios
                .post(`${process.env.REACT_APP_URL}/recoverPassword/${email}`)
                .then(() => {
                    setShowEmailSuccess(true);
                })
                .catch((err) => {
                    setShowEmailError(true);
                    setMessage(err.response.data.message);
                });
        } else {
            setMessage('Introduza o seu email.');
            setShowEmailError(true);
        }
    };
*/
    useEffect(() => {
        setShowEmailError(false);
    }, [email]);

    return (
        <Row className="register">
            <Col md={1}>
                <SideBar />
            </Col>
            <Col>
                <div className="text-white bg-gray p-5 border-light-gray-bottom">
                    <h1 className="px-5">Recuperar password</h1>
                </div>
                <div className="bg-dark-gray p-5 full-height">
                    <div className="bg-gray p-5 border-20 text-white">
                        {/*<form className="p-5" onSubmit={recoverPassword}>*/}
                        <form className="">
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="loginEmail"
                                    onChange={(e) => { setEmail(e.target.value); }}
                                />
                            </div>
                            {showEmailError && (
                                <div className="alert alert-danger py-1">
                                    {message}
                                </div>
                            )}
                            {showEmailSuccess ? (
                                <div className="alert alert-success py-1">
                                    Email enviado com sucesso
                                </div>
                            ) : (
                                <div className="mt-5 text-end">
                                    <Button type="submit" className="bg-marine-green border-20" style={{ width: '10%', height: '60px' }}>
                                        Enviar
                                    </Button>
                                </div>
                            )}
                        </form>
                    </div>
                    <Row className="mt-5">
                        <Col>
                            <Button className="bg-marine-green border-20" onClick={() => navigate('/login')} style={{ width: '100%', height: '60px' }}>
                                Iniciar Sessão
                            </Button>
                        </Col>
                        <Col>
                            <Button className="bg-marine-green border-20" onClick={() => navigate('/register')} style={{ width: '100%', height: '60px' }}>
                                Ainda não tens conta? Regista-te agora!
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
