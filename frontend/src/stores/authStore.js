import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(!!localStorage.getItem('token'));

    const setAuthenticated = (value) => {
        isAuthenticated.value = value;
    };

    return {
        isAuthenticated,
        setAuthenticated
    };
});
