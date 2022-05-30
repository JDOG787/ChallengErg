import fetch from './fetch.js';
import { API_BASE_URL } from './constants.js';

export async function signup(name, email, password) {
    const data = await fetch(`${API_BASE_URL}/users/signup/`, {
        method: 'POST',
        data: {
            name, 
            email,
            password
        }
    })
    console.log("data", data)
    return data;
}

export async function login(email, password) {
    const data = await fetch(`${API_BASE_URL}/users/login/`, {
        method: 'POST',
        data: {
            email,
            password
        }
    })
    console.log("login", data)
    return data;
}

export async function getLogs(token) {
    const data = await fetch(`${API_BASE_URL}/logs/`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    console.log("get logs", data)
    return data;
}

export async function addLog(token, log) {
    const data = await fetch(`${API_BASE_URL}/logs/add/`, {
        method: 'POST',
        headers: {
            'Authorization': token
        },
        data: {
            distance: log
        }
    })
    console.log("add log", data)
    return data;
}