<template>
    <div class="container mt-5">
        <h2>{{ isEditing ? 'Editar Usuario' : 'Crear Usuario' }}</h2>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label class="form-label">Nombre Completo</label>
                <input type="text" v-model="user.name" class="form-control" required />
            </div>
            <div class="mb-3">
                <label class="form-label">Correo Electrónico</label>
                <input type="email" v-model="user.email" class="form-control" required/>
            </div>
            <div class="mb-3" v-if="!isEditing">
                <label class="form-label">Contraseña</label>
                <input type="password" v-model="user.password" minlength="6" class="form-control"  title="Debe tener al menos 6 caracteres." required />
            </div>
            <div class="mb-3">
                <label class="form-label">Estado</label>
                <select v-model="user.active" class="form-control">
                    <option :value="true">Activo</option>
                    <option :value="false">Inactivo</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">{{ isEditing ? 'Actualizar' : 'Crear' }}</button>
            <router-link to="/users" class="btn btn-secondary ms-2">Cancelar</router-link>
        </form>
    </div>
</template>

<script>
import { createUser, updateUser, getUserById } from '../services/users';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const user = ref({
            name: '',
            email: '',
            password: '',
            active: true
        });

        const route = useRoute();
        const router = useRouter();
        const isEditing = ref(false);

        onMounted(async () => {
            if (route.params.id) {
                isEditing.value = true;
                try {
                    const response = await getUserById(route.params.id);
                    user.value = response; // Ahora se llena automáticamente con los datos del usuario
                    user.value.password = ''; // No mostrar la contraseña
                } catch (error) {
                    console.error("Error al cargar el usuario:", error);
                }
            }
        });

        const handleSubmit = async () => {
            try {
                if (isEditing.value) {
                    await updateUser(route.params.id, user.value);
                } else {
                    await createUser(user.value);
                }
                router.push('/users');
            } catch (error) {
                console.error('Error en la operación:', error);
                alert(error.response.data.message);
            }
        };

        return {
            user,
            isEditing,
            handleSubmit
        };
    }
};
</script>
