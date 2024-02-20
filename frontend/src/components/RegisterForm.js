import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "../styles/style.css";
import axios from 'axios';

export default function RegisterSingular({ user }) {
    const [registerError, setRegisterError] = useState(false);
    const [feedback, setFeedback] = useState('');

    const setName = (e) => {
        user.name = e.target.value;
    };
    const setIdeaName = (e) => {
        user.idea_name = e.target.value;
    };
    const setEmail = (e) => {
        user.email = e.target.value;
    };
    const setPassword = (e) => {
        user.password = e.target.value;
    };

    const customCallBack = (notiMsg) => {
        setFeedback(notiMsg);
        if (!registerError) {
            setRegisterError(false);
            setTimeout(() => {
                setFeedback('');
            }, 10000); // miliseconds
            return;
        }
        setRegisterError(true);
    };

    const register = async (e) => {
        e.preventDefault();


        customCallBack('Aguarde enquanto o seu registo é efetuado...');
        axios
            .post('http://localhost:5000/auth/register', user)
            .then((res) => {
                setRegisterError(false);
                customCallBack(res.data.message);
            })
            .catch((err) => {
                console.log("err: ", err);
                customCallBack(err.response.data.errors[0].msg);
                setRegisterError(true);
            });
    };

    useEffect(() => { }, [feedback]);

    return (
        <>
            <form className="text-dark-white" onSubmit={register}>
                <Row className="p-2">
                    <Col md={4} />
                    <Col md={4}>
                        <div className="mb-2">
                            <label htmlFor="registerName" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="registerName" name="name" onChange={setName} required />
                        </div>
                    </Col>
                    <Col md={4} />
                </Row>
                <Row className="p-2">
                    <Col md={4} />
                    <Col md={4}>
                        <div className="mb-2">
                            <label htmlFor="registerIdeaName" className="form-label">
                                Idea Name
                            </label>
                            <input type="text" className="form-control" id="registerIdeaName" name="ideaName" onChange={setIdeaName} required />
                        </div>
                    </Col>
                    <Col md={4} />
                </Row>
                <Row className="p-2">
                    <Col md={4} />
                    <Col md={4}>
                        <div className="mb-2">
                            <label htmlFor="registerEmail" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="registerEmail" onChange={setEmail} required />
                        </div>
                    </Col>
                    <Col md={4} />
                </Row>
                <Row className="p-2">
                    <Col md={4} />
                    <Col md={4}>
                        <div className="mb-2">
                            <label htmlFor="registerPassword" className="form-label">
                                Password
                            </label>
                            <input type="text" className="form-control" id="registerPassword" onChange={setPassword} required />
                        </div>
                    </Col>
                    <Col md={4} />
                </Row>
                <Row className="p-2">
                    <Col md={4} />
                    <Col md={4}>
                        <div className="mt-4 alert-light border-20 text-center">{feedback}</div>
                    </Col>
                    <Col md={4} />
                </Row>
                <div className="mt-5 text-end">
                    <Button type="submit" className="btn bg-marine-green border-20" style={{ width: '10%', height: '60px' }}>
                        Criar conta
                    </Button>
                </div>
            </form>
        </>
    );
}
