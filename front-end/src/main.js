import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';

import LandingPage from '@/pages/LandingPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import PageNotFoundPage from '@/pages/PageNotFoundPage.vue';
import RegistrationPage from '@/pages/RegistrationPage.vue';
import UserDashboardPage from '@/pages/UserDashboardPage.vue';


createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [
            { path: '/', component: LandingPage, },
            { path: '/login', component: LoginPage, },
            { path: '/registration', component: RegistrationPage, },
            { path: '/dashboard/:userId', component: UserDashboardPage, },
            { path: '/:pathMatch(.*)*', component: PageNotFoundPage, },
        ]
    }))
    .mount('#app')