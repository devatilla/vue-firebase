import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Share from "../views/Share.vue";
import { auth } from "../firebase/config";

const isLogin = (to, from, next) => {
  let user = auth.currentUser;

  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/share",
    name: "Share",
    component: Share,
    beforeEnter: isLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
