import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/inicio",
  },
  {
    path: "/inicio",
    name: "home",
    component: Home,
  },
  {
    path: "/registrar",
    name: "registrar",
    component: () => import("../views/Registrar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass:"is-active",
  base: process.env.BASE_URL,
  routes,
});

export default router;
