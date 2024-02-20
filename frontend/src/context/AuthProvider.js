/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({ setAuth: () => { } }); // Certifique-se de incluir setAuth mesmo que seja apenas uma função vazia inicialmente


export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(localStorage.getItem('token') || sessionStorage.getItem('token') || null);
    const [authorization, setAuthorization] = useState(false);
    const getAuthorization = () => {
        if (auth) {
            axios
                .get('http://localhost:5000/auth/getUserAuthorized')
                .then((res) => {
                    console.log("AuthProvider - res.data: ", res.data);
                    setAuthorization(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getAuthorization();
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                getAuthorization,
                authorization,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
