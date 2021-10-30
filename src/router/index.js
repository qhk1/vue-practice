import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';
import ButtonPage from '../views/ButtonPage.vue';
import InputPage from '../views/InputPage.vue';


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
        path: '/InputPage',
        name: 'InputPage',
        component: InputPage,
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
