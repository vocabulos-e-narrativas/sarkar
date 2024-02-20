import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Parede from "../../../../images/materialpisopitch/parede_pitch.jpg";
import Saida1 from "../../../../images/materialpisopitch/pitch_anagrams-132.png";

import PortaL from "../../../../images/oldsarkar/portaL.png";
import PortaR from "../../../../images/oldsarkar/portaR.png";

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
            const maxCompletedChallenges = Math.max(e, 1);
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
            const doorL = document.querySelector('.doorL-exit1');
            const doorR = document.querySelector('.doorR-exit1');
            doorL.style.left = '-18%';
            doorR.style.left = '59%';
            setTimeout(() => {
                navigate("/phases/pitch/pitchhall");
            }, 3000);
        }, 1000);
    }, [navigate, auth, token]);

    return (
        <div className="img-container">
            <img src={Saida1} className="img-100" style={{ zIndex: 1 }} />
            <img src={Parede} className="my-w-exit1" style={{ zIndex: -1 }} />
            <img src={PortaL} className="doorL-exit1" style={{ zIndex: 0 }} />
            <img src={PortaR} className="doorR-exit1" style={{ zIndex: 0 }} />
        </div>
    );
}