import api from './api';
import { useAuthStore } from '../stores/authStore';

export const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    const token = response.data.token || response.data.access_token;
    if (token) {
        localStorage.setItem('token', token);
        api.defaults.headers.Authorization = `Bearer ${token}`;

        // Actualizar estado global de autenticación
        const authStore = useAuthStore();
        authStore.setAuthenticated(true);
    }
    return response.data;
};

export const logout = async () => {
    await api.post('/logout');
    localStorage.removeItem('token');
    delete api.defaults.headers.Authorization;

    // Actualizar estado global de autenticación
    const authStore = useAuthStore();
    authStore.setAuthenticated(false);
};
