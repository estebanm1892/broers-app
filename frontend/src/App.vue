<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex justify-content-between">
        <div>
          <router-link class="navbar-brand" to="/users">Usuarios BROERS</router-link>
        </div>
        <div v-if="authStore.isAuthenticated">
          <button class="btn btn-danger" @click="handleLogout">Cerrar Sesión</button>
        </div>
      </div>
    </nav>

    <router-view />

    <FooterComponent />
  </div>
</template>

<script>
import { logout } from './services/auth';
import { useAuthStore } from './stores/authStore';
import { useRouter } from 'vue-router';
import FooterComponent from './components/Footer.vue'; // Importación del Footer

export default {
  components: {
    FooterComponent // Registramos el componente
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await logout();
        router.push('/');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };

    return {
      authStore,
      handleLogout
    };
  }
};
</script>
