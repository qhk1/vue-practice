import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';
import ButtonPage from '../views/ButtonPage.vue';
import nav2 from '../views/nav2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/button',
        // name: 'button',
        component: ButtonPage,
      },
      {
        path: '/nav2',
        name: 'nav2',
        component: nav2,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
