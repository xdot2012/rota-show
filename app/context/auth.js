import axios from 'axios';
import { BASE_URL } from '../variables';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, { createContext, useState } from 'react';
import { Alert} from 'react-native'

const AuthContext = createContext({});


export const AuthProvider = (props) => {
    const [signedIn, setSignedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userID, setUserID] = useState(null);

    const AuthPost = async (data) => {
        await axios.post(`${BASE_URL}${data.url}`, data.body, {headers: {Authorization: `Token ${token}`}, timeout: 36000})
        .then((response) => {
            console.log(response.data);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return null;
        })
    }

    const GetToken = () => {
        return `Token ${token}`
    }

    const GetUser = () => {
        return userID;
    }

    const Logout = () => {
        setToken(null);
        setSignedIn(false);
        setUserID(null);
    }

    async function Login(username, password) {
        axios.post(`${BASE_URL}/accounts/token/`, {username, password}, {timeout: 36000})
        .then(
            ((response) => {
                setToken(response.data.token);
                setUserID(response.data.user_id);
                setSignedIn(true);
            }
        ))
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: signedIn, Login, AuthPost, GetUser, Logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

