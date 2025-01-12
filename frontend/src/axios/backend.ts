import axios from "axios";

export const userBackend = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + 'user',
    timeout: 10000
});


export const blogBackend = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + 'blog',
    timeout: 10000
});
