import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_DITTIES_SUCCESS = 'GET_DITTIES_SUCCESS';
export const getDittiesSuccess = data => ({
    type: GET_DITTIES_SUCCESS,
    data
});

export const GET_DITTIES_ERROR = 'GET_DITTIES_ERROR';
export const getDittiesError = error => ({
    type: GET_DITTIES_ERROR,
    error
});

export const GET_ONE_DITTY_SUCCESS = 'GET_ONE_DITTY_SUCCESS';
export const getOneDittySuccess = data => ({
    type: GET_ONE_DITTY_SUCCESS,
    data
});

export const getAllDitties = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/ditties`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => {
            console.log(res)
            normalizeResponseErrors(res)
            return res.json()
        })
        .then((data) => {
            console.log(data)
            dispatch(getDittiesSuccess(data))
        })
        .catch(err => {
            dispatch(getDittiesError(err));
        });
}

export const getDittyById = (DittyId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/ditties/${DittyId}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(getOneDittySuccess(data)))
        .catch(err => {
            dispatch(getDittiesError(err));
        });
}

export const deleteDitty = (DittyId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/ditties/${DittyId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(getAllDitties()))
        .catch(err => {
            dispatch(getDittiesError(err));
        });
}

export const PostDitty = (songData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/ditties`, {
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
    })
        .then(res => normalizeResponseErrors(res))
        .then((thisDitty) => {
            dispatch(getDittyById(thisDitty._id))
        })
        .catch(err => {
            dispatch(getDittiesError(err));
        });
}

export const PutDitty = (DittyId, songData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/ditties/${DittyId}`, {
        method: 'PUT',
        headers: { 
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
    })
        .then(res => normalizeResponseErrors(res))
        .then((thisDitty) => {
            dispatch(getDittyById(thisDitty._id))
        })
        .catch(err => {
            dispatch(getDittiesError(err));
        });
}