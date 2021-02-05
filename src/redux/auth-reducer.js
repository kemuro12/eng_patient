import { authAPI } from "../api/api";
import { getUser } from "./user-reducer";
import * as axios from 'axios';

const SET_FETCHING = "auth/SET_FETCHING"
const SET_ERROR = "auth/SET_ERROR"

let initialState = {
    isFetching: false,
    errorMessage: ""
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default:
            return state; 
    }
}

export const setFetching = isFetching => {
    return {
        type: SET_FETCHING,
        isFetching
    }
}

export const setError = errorMessage => {
    return {
        type: SET_ERROR,
        errorMessage
    }
}

export const setLogout = () => {
    return {
        type: 'auth/LOGOUT'
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        try{
            dispatch(setFetching(true))
            dispatch(setError(""))
            let response = await authAPI.login(email, password);
            if(response.data.error){
                dispatch(setError(response.data.error.message))
                dispatch(setFetching(false))
                return false;
            }else{
                window.localStorage.setItem("token", response.data.token)
                axios.defaults.headers.common['Authorization'] = response.data.token;
                dispatch(getUser())
                dispatch(setFetching(false))
                return true;
            }
        }catch(e){
            dispatch(setError(e))
        }
        
    }
}

export const logout = () => {
    return async (dispatch) => {
        window.localStorage.removeItem('token');
        delete axios.defaults.headers.common["Authorization"];
        dispatch(setLogout());
    }
}

export default authReducer;