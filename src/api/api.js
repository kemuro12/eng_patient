import * as axios from 'axios';

export const instance = axios.create({
    baseURL: " https://api.englishpatient.org",
    headers:{
        'Content-Type':'application/json'
    }
})

export const authAPI = {
    login(email, password) {
        return instance.post(`/login`, {email, password})
    },
}

export const usersAPI = {
    getUser(token){
        return instance.get(`/me?token=${token}`)
    },
}