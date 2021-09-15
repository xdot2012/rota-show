import axios from 'axios';
import { BASE_URL } from '../variables';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, { createContext, useState } from 'react';

const AuthContext = createContext({});


export const AuthProvider = (props) => {
    const [signedIn, setSignedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(null);

    const GetToken = () => {
        return token
    }

    const Logout = () => {
        setToken(null);
        setSignedIn(false);
    }

    async function Login(username, password) {
        console.log(`${BASE_URL}/accounts/token/`);
        axios.post(`${BASE_URL}/accounts/token/`, {username, password}, {timeout: 36000})
        .then(
            ((response) => {
                setToken(response.data.token);
                setUserID(response.data.userID);
                setSignedIn(true);
            }
        ))
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: signedIn, Login, GetToken, Logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

