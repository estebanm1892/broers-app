<template>
    <div class="container mt-5">
        <h2>Lista de Usuarios</h2>
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
                        <button @click="toggleActive(user.id)" class="btn btn-warning">Activar/Desactivar</button>
                        <button @click="deleteUser(user.id)" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getUsers, updateUser, deleteUser } from '../services/users';

export default {
    data() {
        return {
            users: []
        };
    },
    async created() {
        this.users = await getUsers();
    },
    methods: {
        async toggleActive(user) {
            user.active = !user.active;
            await updateUser(user.id, user);
            this.users = await getUsers();
        },
        async deleteUser(id) {
            await deleteUser(id);
            this.users = await getUsers();
        }
    }
};
</script>