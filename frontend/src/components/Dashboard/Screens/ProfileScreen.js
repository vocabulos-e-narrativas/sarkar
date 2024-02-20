import React, { useState, useEffect, useContext } from "react";

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import Profile from "../../../components/Dashboard/Profile";
import Notifications from "../../../components/Dashboard/Notifications";

import info from "../../../images/dashboard/info.png";

import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

import Achievement1 from "../../../images/dashboard/achievement1.png";
import Achievement2 from "../../../images/dashboard/achievement2.png";
import Achievement3 from "../../../images/dashboard/achievement3.png";
import Achievement4 from "../../../images/dashboard/achievement4.png";
import { useNavigate } from "react-router-dom";


export default function ProfileScreen(props) {
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');

    const [name, setName] = useState(props.name);
    const [ideaName, setIdeaName] = useState(props.idea);
    const [email, setEmail] = useState(props.email);

    const updateName = () => {
        if (auth) {
            axios.patch(
                'http://localhost:5000/auth/updateName',
                { name: name },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Nome atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o nome:', error);
                });
        }

    };

    const updateIdeaName = () => {
        if (auth) {
            axios.patch(
                'http://localhost:5000/auth/updateIdeaName',
                { idea: ideaName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Nome da ideia atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o nome da ideia:', error);
                });
        }

    };

    const updateEmail = () => {
        if (auth) {
            axios.patch(
                'http://localhost:5000/auth/updateEmail',
                { email: email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    navigate('/login');
                    console.log('Email atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o email:', error);
                });
        }

    };

    useEffect(() => {
    }, [auth, token]);

    return (
        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-widgets m-2 p-2">
                    <Container>
                        <Profile
                            image={props.image}
                            name={props.name}
                            idea={props.idea}
                            diagnosis={props.diagnosis}
                            completedChallenges={props.completedChallenges}
                        />
                    </Container>
                </Row>
                <Row className="dashboard-user-notifications mt-4 m-2 p-3">
                    <Container>
                        <Notifications />
                    </Container>
                </Row>
            </Col>
            <Col md={8}>
                <Row className="dashboard-profile-panel m-2 p-2">
                    <Container>
                        <Row className="border-light-gray-bottom pb-2 pt-3">
                            <Col md={11} />
                            <Col md={1} className="text-right">
                                <img src={info} className="" alt="" />
                            </Col>
                        </Row>
                        <Row className="border-light-gray-bottom pb-2 pt-4">
                            <h1 className="mx-4"><strong>Profile</strong></h1>
                        </Row>
                        <Row className="py-4">
                            <Col md={1} />
                            <Col md={3} className="pt-2">
                                <Row>
                                    <img src={props.image} className="w-50 mx-auto" alt="" />
                                </Row>
                                <Row className="mt-3">
                                    <h2 className="mx-auto"><strong>{props.name}</strong></h2>
                                </Row>
                                <Row>
                                    <h5 className="text-orange mx-auto"><strong>{props.idea}</strong></h5>
                                </Row>
                                <Row className="mt-1">
                                    <p className="text-orange mx-auto"><strong>{props.email}</strong></p>
                                </Row>
                            </Col>
                            <Col md={1} />
                            <Col md={6} className="">
                                <Row>
                                    <form className="form-profile w-100" onSubmit={updateName}>
                                        <label htmlFor="updateName" className="form-label">
                                            <h5>Name</h5>
                                        </label>
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type='text'
                                            className='form-control'
                                            id='name'
                                            name='name'
                                            required
                                        />
                                    </form>
                                </Row>
                                <Row className="my-4">
                                    <form className="form-profile w-100" onSubmit={updateIdeaName}>
                                        <label htmlFor="updateIdeaName" className="form-label">
                                            <h5>Name of the idea</h5>
                                        </label>
                                        <input
                                            value={ideaName}
                                            onChange={(e) => setIdeaName(e.target.value)}
                                            type='text'
                                            className='form-control'
                                            id='ideaName'
                                            name='ideaName'
                                            required
                                        />
                                    </form>
                                </Row>
                                <Row>
                                    <form className="form-profile w-100" onSubmit={updateEmail}>
                                        <label htmlFor="updateEmail" className="form-label">
                                            <h5>Email</h5>
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type='email'
                                            className='form-control'
                                            id='email'
                                            name='email'
                                            required
                                        />
                                    </form>
                                </Row>
                                <Row className="my-4">
                                    <Row className="px-3">
                                        <h5>Latest Achievements</h5>
                                    </Row>
                                    <Row className="px-1 mb-4 mt-3">
                                        <Col>
                                            <img src={Achievement1} className="locked" alt="" />
                                        </Col>
                                        <Col>
                                            <img src={Achievement2} className="locked" alt="" />
                                        </Col>
                                        <Col>
                                            <img src={Achievement3} className="locked" alt="" />
                                        </Col>
                                        <Col>
                                            <img src={Achievement4} className="locked" alt="" />
                                        </Col>
                                    </Row>
                                    <Row className="px-3">
                                        <h5 className="text-orange">View full list of achievements</h5>
                                    </Row>
                                </Row>
                            </Col>
                            <Col md={1} />
                        </Row>
                    </Container>
                </Row>
            </Col >
        </Row >
    );
};


