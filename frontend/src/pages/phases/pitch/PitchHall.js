import React, { useState, useEffect, useContext } from "react";

import PitchHall1 from "./estudio1/PitchHall1";
import PitchHall2 from "./estudio2/PitchHall2";
import PitchHall3 from "./estudio3/PitchHall3";

import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

export default function PitchHall() {

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
                    console.log("res.data.completed_challenges: ", res.data.completed_challenges);
                    setCompletedChallenges(res.data.completed_challenges);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getCompletedChallenges();
    }, [auth, token]);

    let level = completedChallenges;

    return (
        <div>
            {level === 0 && (
                <PitchHall1 />
            )}
            {level === 1 && (
                <PitchHall2 />
            )}
            {level >= 2 && (
                <PitchHall3 />
            )}
        </div>
    );
}