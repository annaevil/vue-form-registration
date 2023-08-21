// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Profile from '../views/ProfileVue.vue';
import TicketList from '../views/TicketVue.vue';
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: TicketList
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//beforeEach для защиты маршрутов
router.beforeEach((to, from, next) => {
  if ((to.path === '/ticket' || to.path === '/profile') && !store.state.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
