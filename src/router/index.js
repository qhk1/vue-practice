import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import nav1 from "../views/nav1.vue";
import nav2 from "../views/nav2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nav1",
    name: "nav1",
    component: nav1,
  },
  {
    path: "/nav2",
    name: "nav2",
    component: nav2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
