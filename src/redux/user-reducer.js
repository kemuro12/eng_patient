import { usersAPI } from "../api/api";

const SET_USER_DATA = "user/SET_USER_DATA"

let initialState = {
    user:null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state; 
    }
}

export const setUserData = user => {
    return {
        type: SET_USER_DATA,
        user
    }
}

export const getUser = (token) => {
    return async (dispatch) => {
        let response = await usersAPI.getUser(token);
        if(response.data.result){
            let user = response.data.result.user;
            
            dispatch(setUserData({
                firstName: user.firstName,
                lastName: user.lastName,
                avatar: user.avatar,
                phone: user.phone,
                skype: user.skype,
                stasiNote: user.stasiNote
            }))
        }else{
            console.log(response.data.message);
        }
    }
}

export default authReducer;