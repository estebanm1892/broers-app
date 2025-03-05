import axios from 'axios';

const api = axios.create({
    baseURL: 'http://broers-app.test/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor de solicitud para incluir el token en cada petición
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.warn("No hay token en LocalStorage");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
