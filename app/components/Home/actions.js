import axios from 'axios';
import { BASE_URL } from '../../variables';

export const LOAD_LOCALS = 'locals/loading';
export const ROUTE_GENERATED = 'locals/route_generated';
export const ACCOUNT_CREATED = 'accounts/created';

export const accountCreated = (payload) => {
    return {
        type: ACCOUNT_CREATED,
        payload: payload
    }
}
export const hasSuccess = (payload) => {
    return {
        type: LOAD_LOCALS,
        payload: payload.data
    };
};

export const hasSuccessRoute = (payload) => {
    return {
        type: ROUTE_GENERATED,
        paylod: payload.data.route
    }
}

export const LoadLocals = (token) => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/locals/`, {headers: {Authorization: `Token ${token}`}}, {timeout: 36000})
            .then((response => {
                dispatch(hasSuccess(response));
        }))
            .catch((error => {
                console.log(error);
            })
        )
    }
}


export const GenerateRoute = (token, data) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}/routes/generate/`, data, {headers: {Authorization: `Token ${token}`}}, {timeout: 36000})
            .then((response => {
                dispatch(hasSuccessRoute(response));
        }))
            .catch((error => {
                console.log(error);
            })
        )
    }
}

export const CreateAccount = (data) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}/accounts/users/`, data, {timeout: 36000})
            .then((response => {
                dispatch(accountCreated(response));
        }))
            .catch((error => {
                console.log(error);
            })
        )
    }
}