import { authAPI, instance } from "../api/api";
import { getUser } from "./user-reducer";

const SET_TOKEN = "auth/SET_TOKEN"
const SET_FETCHING = "auth/SET_FETCHING"
const SET_ERROR = "auth/SET_ERROR"

let initialState = {
    token: null,
    isFetching: false,
    errorMessage: ""
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
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

export const setToken = token => {
    return {
        type: SET_TOKEN,
        token
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

export const login = (email, password) => {
    return async (dispatch) => {
        try{
            dispatch(setFetching(true))
            let response = await authAPI.login(email, password);
            if(response.data.error){
                dispatch(setError(response.data.error.message))
                dispatch(setFetching(false))
                return false;
            }else{
                instance.interceptors.request.use(req => {
                    req.headers.Authorization = response.data.token;
                    return req;
                })
                dispatch(setToken(response.data.token))
                dispatch(getUser(response.data.token))
                dispatch(setFetching(false))
                return true;
            }
        }catch(e){
            dispatch(setError(e))
        }
        
    }
}

export default authReducer;