import axios from 'axios';
import { BASE_URL } from '../../variables';

export const LOAD_PAGES = 'pages/loading';

export const loadPagesSuccess = (payload) => {
    return {
        type: LOAD_PAGES,
        payload: payload.data
    };
};
