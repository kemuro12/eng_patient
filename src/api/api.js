import * as axios from 'axios';

export const authAPI = {
    login(email, password) {
        return axios.post(`/login`, {email, password})
    },
}

export const usersAPI = {
    getUser(){
        let token = window.localStorage.getItem('token')
        if(!token) return false;
        return axios.get(`/me?token=${token}`)
    },
}