import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';
import ButtonPage from '../views/ButtonPage.vue';
import InputPage from '../views/InputPage.vue';
import RadioPage from '../views/RadioPage.vue'
import CheckboxPage from '../views/CheckboxPage.vue'
import SelectPage from '../views/SelectPage';
import TablePage from '../views/TablePage.vue';

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
      {
        path: '/RadioPage',
        name: 'RadioPage',
        component: RadioPage,
      },
      {
        path: '/CheckboxPage',
        name: 'CheckboxPage',
        component: CheckboxPage,
      },
      {
        path: '/SelectPage',
        name: 'SelectPage',
        component: SelectPage,
      },
      {
        path: '/TablePage',
        name: 'TablePage',
        component: TablePage,
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
