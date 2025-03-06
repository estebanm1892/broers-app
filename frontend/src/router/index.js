import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../views/UserList.vue';
import Login from '../views/Login.vue';
import UserForm from '../views/UserForm.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/users', component: UserList },
    { path: '/users/create', component: UserForm },
    { path: '/users/edit/:id', component: UserForm, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
