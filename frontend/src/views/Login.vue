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
    </div>
</template>

<script>
import { login } from '../services/auth';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await login(this.email, this.password);
                alert(response.message);
                this.$router.push('/users');
            } catch (error) {
                alert('Error en login');
            }
        }
    }
};
</script>