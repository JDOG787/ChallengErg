import fetch from './fetch.js';
import { API_BASE_URL } from './constants.js';

export const signup = async (name, email, password) => {
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

export const login = async (email, password) => {
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

export const getLogs = async (token) => {
    const data = await fetch(`${API_BASE_URL}/logs/`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    console.log("get logs", data)
    return data;
}

export const getPastWeek = async (token) => {
    const data = await fetch(`${API_BASE_URL}/logs/pastweek/`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    console.log("get past week", data)
    return data;
}

export const addLog = async (token, eventId, log) => {
    const data = await fetch(`${API_BASE_URL}/logs/add/`, {
        method: 'POST',
        headers: {
            'Authorization': token
        },
        data: {
            distance: log,
            eventId
        }
    })
    console.log("add log", data)
    return data;
}

export const getEvents = async (token) => {
    const data = await fetch(`${API_BASE_URL}/events/`, {
        method: 'GET',
    })
    console.log("get events", data)
    return data;
}

export const getRegisteredEvents = async (token) => {
    const data = await fetch(`${API_BASE_URL}/users/events/`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    console.log("get events", data)
    return data;
}

