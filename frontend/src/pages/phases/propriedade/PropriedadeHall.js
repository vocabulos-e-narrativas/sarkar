import React, { useState, useEffect, useContext } from "react";

import PropriedadeHall1 from "./estudio1/PropriedadeHall1";
import PropriedadeHall2 from "./estudio2/PropriedadeHall2";
import PropriedadeHall3 from "./estudio3/PropriedadeHall3";

import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

export default function PropriedadeHall() {

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
            {level === 3 && (
                <PropriedadeHall1 />
            )}
            {level === 4 && (
                <PropriedadeHall2 />
            )}
            {level >= 5 && (
                <PropriedadeHall3 />
            )}
        </div>
    );
}