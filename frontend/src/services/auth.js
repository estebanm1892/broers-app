import api from './api';

export const login = async (email, password) => {
    const response = await api.post('/login', { email, password });

    const token = response.data.token || response.data.access_token; // Asegurarse del nombre correcto

    console.log("Respuesta del servidor:", response.data);
    

    if (token) {
        console.log("Token recibido:", token);

        // Guardar el token en LocalStorage
        localStorage.setItem('token', token);

        // Configurar Axios para usar el token
        api.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
        console.error("No se recibió un token en la respuesta.");
    }

    return response.data;
};

export const logout = async () => {
    await api.post('/logout');

    // Eliminar el token
    localStorage.removeItem('token');
    delete api.defaults.headers.Authorization;
};
