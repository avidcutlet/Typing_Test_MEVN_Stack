import { createRouter, createWebHistory } from 'vue-router'

// import pages
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegistrationPage from '@/pages/RegistrationPage.vue';
import PageNotFoundPage from '@/pages/PageNotFoundPage.vue';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, },
    { path: '/login', name: 'login', component: LoginPage, },
    { path: '/registration', name: 'registration', component: RegistrationPage, },
    { path: '/forgotPassword', name: 'forgotPassword', component: ForgotPasswordPage, },
    { path: '/:pathMatch(.*)*', name: 'pagenotFound', component: PageNotFoundPage, },
  ]
})

export default router
