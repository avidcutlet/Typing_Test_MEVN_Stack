import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";

// import pages
import LandingPage from "@/pages/LandingPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PageNotFoundPage from "@/pages/PageNotFoundPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import UserDashboardPage from "@/pages/UserDashboardPage.vue";

createApp(App)
	.use(
		VueRouter.createRouter({
			history: VueRouter.createWebHistory(process.env.BASE_URL),
			routes: [
				{ path: "/", component: LandingPage },
				{ path: "/login", component: LoginPage },
				{ path: "/signup", component: SignUpPage },
				{ path: "/dashboard/:userId", component: UserDashboardPage },
				{ path: "/:pathMatch(.*)*", component: PageNotFoundPage }, // Redirect to PageNotFoundPage if path doesn't match
			],
		})
	)
	.mount("#app");
