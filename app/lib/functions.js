import fetch from './fetch.js';

export async function signup(name, email, password) {
    const data = await fetch('http://192.168.132.15:8080/users/signup/', {
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
    const data = await fetch('http://192.168.132.15:8080/users/login/', {
        method: 'POST',
        data: {
            email,
            password
        }
    })
    console.log("login", data)
    return data;
}