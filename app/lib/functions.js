import fetch from './fetch.js';

export async function signup(email, password) {
    const data = await fetch('http://192.168.132.15:8080/users/signup/', {
        method: 'POST',
        data: {
            email,
            password
        }
    })
    return data;
}