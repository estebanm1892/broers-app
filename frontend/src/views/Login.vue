<template>
    <div class="container mt-5">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleLogin">
            <div class="mb-3">
                <label class="form-label">Correo Electrónico</label>
                <input type="email" v-model="email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" v-model="password" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>

        <!-- Modal de error -->
        <div v-if="errorMessage" class="alert alert-danger mt-3">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
import { login } from '../services/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '' // Variable para mostrar mensajes de error
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await login(this.email, this.password);
                this.$router.push('/users');
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    this.errorMessage = 'Tu cuenta está desactivada. Contacta al administrador.';
                } else {
                    this.errorMessage = 'Error en login. Verifica tus credenciales.';
                }
            }
        }
    }
};
</script>
