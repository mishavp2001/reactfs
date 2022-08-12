import axios from "axios";
import { FETCH_USER, LOGOUT } from "./types";

export const fetchUser = () => async dispatch => {
        const resp = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: resp.data});
}

export const logOut = () => async dispatch => {
        const resp = await axios.get('/api/logout');
        dispatch({type: LOGOUT, payload: resp.data});
}

export const handleToken = (token) => async dispatch => {
        const resp = await axios.post('/api/stripe', token);
        dispatch({type: FETCH_USER, payload: resp.data});
}