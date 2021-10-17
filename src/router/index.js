import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import nav1 from '../views/nav1.vue';
import nav2 from '../views/nav2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: '/nav1',
        name: 'nav1',
        component: nav1,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
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
