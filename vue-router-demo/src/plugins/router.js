import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Login from '@/components/authentication/Login.vue';
import Register from '@/components/authentication/Register.vue';
import Details from '@/components/Details.vue';

const routes =  [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/product/:id', name: 'product' ,component: Details }
]   


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});

