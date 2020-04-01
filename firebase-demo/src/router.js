import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    {
        path: '/sign-in', component: SignIn, beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token') !== null) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/sign-up', component: SignUp, beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token') !== null) {
                next('/');
            } else {
                next();
            }
        }
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});