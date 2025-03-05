import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../views/UserList.vue';
import Login from '../views/Login.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/users', component: UserList }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
