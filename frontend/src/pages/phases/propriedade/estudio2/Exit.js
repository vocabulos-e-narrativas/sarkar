import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


import Estudio2Longe from "../../../../images/materialpisopitch/propriedade_intelectual/parede.png";
import Porta2 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-22.png";
import PortaL from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-21.png";
import PortaR from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-23.png";

import axios from "axios";
import { AuthContext } from "../../../../context/AuthProvider";

export default function Exit() {

    const { auth } = useContext(AuthContext); // Use o hook useContext para acessar o valor do contexto
    const token = localStorage.getItem('token');
    const [completedChallenges, setCompletedChallenges] = useState(0);
    const navigate = useNavigate();

    const getCompletedChallenges = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getCompletedChallenges', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("res.data.completed_challenges: ", res.data.completed_challenges);
                    setCompletedChallenges(res.data.completed_challenges);
                    completeChallenge(res.data.completed_challenges);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const completeChallenge = (e) => {
        if (auth) {
            const maxCompletedChallenges = Math.max(e, 5);
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
        const openDoors = setTimeout(() => {
            const doorL = document.querySelector('.doorL');
            const doorR = document.querySelector('.doorR');
            doorL.style.left = '-12%';
            doorR.style.left = '78%';
            setTimeout(() => {
                navigate("/phases/propriedade/propriedadehall");
            }, 3000);
        }, 1000);
    }, [navigate, auth, token]);

    return (
        <div className="img-container">
            <img src={Porta2} className="img-100" style={{ zIndex: 1 }} />
            <img src={Estudio2Longe} className="my-w h-75" style={{ zIndex: -1 }} />
            <img src={PortaL} className="doorL" style={{ zIndex: 0 }} />
            <img src={PortaR} className="doorR" style={{ zIndex: 0 }} />
        </div>
    );
}