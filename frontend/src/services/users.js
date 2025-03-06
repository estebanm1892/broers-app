import api from './api';

export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

export const createUser = async (user) => {
    return await api.post('/users', user); // Se mantiene la ruta POST /users
};

export const updateUser = async (id, user) => {
    return await api.put(`/users/${id}`, user); // Se mantiene la ruta PUT /users/{id}
};

export const deleteUser = async (id) => {
    return await api.delete(`/users/${id}`);
};
