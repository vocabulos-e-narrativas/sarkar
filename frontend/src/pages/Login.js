import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button, Row, Col
} from 'react-bootstrap';
import SideBar from "../components/SideBar";
import "../styles/style.css";

import axios from 'axios';
import useAuth from '../hooks/useAuth';


export default function Login() {
    const navigate = useNavigate();
    const { setAuth } = useAuth(); // Certifique-se de desestruturar setAuth corretamente
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('An error has occurred. Reload the page and try again.');
    const [showLoginError, setShowLoginError] = useState(false);


    const authenticate = async (e) => {
        e.preventDefault(); // Prevent the form from submitting normally
        axios
            .post('http://localhost:5000/auth/login',
                JSON.stringify({
                    email,
                    password,
                }),
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true, // Send cookies with the request
                }
            )
            .then((res) => {
                console.log("Login - res.data: ", res.data);
                setAuth(res.data.token);
                const token = res.data.token; // Supondo que o token é retornado pela API como "token"
                localStorage.setItem('token', token); // Armazenar o token na localStorage
                setAuth(true); // Set authentication status to true
                setShowLoginError(false);
                if (res.data.diagnosis === null) {
                    navigate('/questionnaire');
                } else {
                    navigate('/dashboard');
                }
            }).catch((err) => {
                console.log("err: ", err);
                setErrorMessage(err.response.data.errors[0].msg);
                setShowLoginError(true);
            })
    };


    useEffect(() => { }, [email, password, errorMessage]);



    return (
        <Row className="register">
            <Col md={1}>
                <SideBar />
            </Col>
            <Col>
                <div className="text-white bg-gray p-5 border-light-gray-bottom">
                    <h1 className="px-5">Login</h1>
                </div>
                <div className="bg-dark-gray p-5 full-height">
                    <div className="bg-gray p-5 border-20 text-white">
                        <form className="p-5" onSubmit={authenticate}>
                            {showLoginError && <div className="alert alert-danger alert-font text-center mb-3">{errorMessage}</div>}
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    name='email'
                                    placeholder='Your email'
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Palavra-passe
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Your password"
                                    required
                                />
                            </div>
                            <div className="mt-5">
                                <Button type="submit" className="bg-marine-green border-20" style={{ width: '10%', height: '60px' }}>
                                    Iniciar Sessão
                                </Button>
                            </div>
                        </form>
                    </div>
                    <Row className="mt-5">
                        <Col>
                            <Button className="bg-marine-green border-20" onClick={() => navigate('/recoverPassword')} style={{ width: '100%', height: '60px' }}>
                                Recuperar palavra-passe
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
        </Row >

    );
}