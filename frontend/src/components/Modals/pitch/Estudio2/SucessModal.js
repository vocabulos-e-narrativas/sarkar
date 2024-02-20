import React from "react";
//import React, { useState, useEffect, useContext } from "react";

import {
    Button,
    Modal,
    Row,
    Col
} from 'react-bootstrap';

import "../../../../styles/modal.css";

import Frame from "../../../../images/materialpisopitch/material_separado_pitch_bonecos_com_fame-78.png";
import X from "../../../../images/materialpisopitch/material_separado_pitch-63.png";
import Star from "../../../../images/materialpisopitch/material_separado_pitch-63.png";

import { useNavigate } from 'react-router-dom';

//import axios from "axios";
//import { AuthContext } from "../../../../context/AuthProvider";

export default function SucessModal({ setIsOpen }) {
    const navigate = useNavigate();
    /*
    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');
    const [completedChallenges, setCompletedChallenges] = useState(0);

    const getCompletedChallenges = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getCompletedChallenges', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log(res.data.completed_challenges);
                    setCompletedChallenges(res.data.completed_challenges);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const completeChallenge = () => {
        if (auth) {
            const maxCompletedChallenges = Math.max(completedChallenges, 2);
            axios.patch(
                'http://localhost:5000/auth/updateCompletedChallenges',
                { challenges: maxCompletedChallenges },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            )
                .then((response) => {
                    console.log('Número de desafios concluídos atualizado com sucesso.');
                })
                .catch((error) => {
                    console.error('Falha ao atualizar o número de desafios concluídos:', error);
                });
        }

    };

    useEffect(() => {
        getCompletedChallenges();
    }, [auth, token]);
    */
    return (
        <>
            <div className="darkBG" />
            {setIsOpen && <img src={Frame} className="img-100" />}
            <div className="text-center text-white">
                <div className="modal p-5">
                    <div className="modalHeader my-5">
                        <img src={Star} alt="" className="" />
                    </div>
                    <div className="modalHeader mt-5">
                        <h1 className="heading">Success!</h1>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            You helped Miguel deliver the perfect pitch!
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Move on to the next studio and give it a try yourself.
                        </h3>
                    </div>
                    <div className="modalContent py-5">
                        <h3>
                            Good luck!
                        </h3>
                    </div>
                    <div className="modalActions p-5 text-center">
                        {/*<Button className="desafio-btn bg-marine-green" onClick={() => { completeChallenge(); navigate('/phases/pitch/pitchhall'); }}>*/}
                        <Button className="desafio-btn bg-marine-green" onClick={() => navigate('/phases/pitch/pitchhall')}>
                            <h3>Continue</h3>
                        </Button>
                    </div>
                </div>
            </div >
        </>
    );
}