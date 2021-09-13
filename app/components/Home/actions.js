import axios from 'axios';
import { BASE_URL } from '../../variables';

export const LOAD_PAGES = 'pages/loading';

export const loadPagesSuccess = (payload) => {
    return {
        type: LOAD_PAGES,
        payload: payload.data
    };
};

export const LoadPages = () => {
    return (dispatch) => {
        const url = `${BASE_URL}/lista`;
        axios.get(url, {timeout: 36000})
            .then((response => {
                dispatch(loadPagesSuccess(response));
            }))
            .catch((error => {
                console.log(error)
            }));
    };
};
