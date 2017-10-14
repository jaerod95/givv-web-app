import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Wrapper from '@/components/Wrapper';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/jj',
      name: 'Wrapper',
      component: Wrapper,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
});
