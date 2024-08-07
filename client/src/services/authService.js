import * as request from '../lib/request';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/users/login`, {
        email,
        password,
    });
    return result;
};

export const register = (username, email, password) => 
    request.post(`${baseUrl}/users/register`, {
        username,
        email,
        password,
    });

export const logout = async () => {
    const result = await request.get(`${baseUrl}/users/logout`);
    return result;
};
