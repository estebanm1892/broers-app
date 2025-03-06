<template>
    <div class="container mt-5">
        <h2>Lista de Usuarios</h2>
        <router-link to="/users/create" class="btn btn-success mb-3">Crear Usuario</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Activo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.active ? 'Sí' : 'No' }}</td>
                    <td>
                        <button @click="toggleActive(user)" class="btn btn-warning">Activar/Desactivar</button>
                    </td>
                    <td>
                        <router-link :to="`/users/edit/${user.id}`" class="btn btn-warning me-2">Editar</router-link>
                        <button @click="deleteUser(user.id)" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    data() {
        return {
            users: []
        };
    },
    async created() {
        this.users = await this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            const response = await api.get('/users');
            return response.data;
        },
        async toggleActive(user) {
            try {
                const response = await api.patch(`/users/${user.id}/toggle-active`);

                // Reemplazar el usuario actualizado en la lista
                const index = this.users.findIndex(u => u.id === user.id);
                if (index !== -1) {
                    this.users[index] = response.data;
                }
            } catch (error) {
                console.error('Error al cambiar estado:', error);
            }
        },
        async deleteUser(id) {
            await api.delete(`/users/${id}`);
            this.users = await this.fetchUsers();
        }
    }
};
</script>