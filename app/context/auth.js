import axios from 'axios';
import { BASE_URL } from '../variables';
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, { createContext, useState } from 'react';
import { Alert} from 'react-native'

const AuthContext = createContext({});


export const AuthProvider = (props) => {
    const [signedIn, setSignedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});

    const GetToken = () => {
        return token
    }
    
    const get = async (data) => {
        await axios.get(`${BASE_URL}${data.url}`, {headers: {Authorization: `Token ${token}`}, timeout: 36000})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        })
    }

    const post = async (data) => {
        await axios.post(`${BASE_URL}${data.url}`, data.body, {headers: {Authorization: `Token ${token}`}, timeout: 36000})
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        })
    }

    const put = async (data) => {
        await axios.put(`${BASE_URL}${data.url}`, data.body, {headers: {Authorization: `Token ${token}`}, timeout: 36000})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        })
    }

    const del = async (data) => {
        await axios.delete(`${BASE_URL}${data.url}`, {headers: {Authorization: `Token ${token}`}, timeout: 36000})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        })
    }

    const GetUser = () => {
        return user
    }

    const Logout = () => {
        setToken(null);
        setSignedIn(false);
        setUser({});
    }

    async function Login(username, password) {
        await axios.post(`${BASE_URL}/accounts/token/`, {username, password}, {timeout: 36000})
        .then(
            ((response) => {
                setToken(response.data.token);
                setSignedIn(true);
                setUser({
                    id: response.data.user_id,
                    email: response.data.email,
                    username: response.data.username 
                })
            }
        ))
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: signedIn, GetToken, Login, post, get, put, del, Logout, GetUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

