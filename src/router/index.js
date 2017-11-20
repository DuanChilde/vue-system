import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Login from '@/components/Login'
import Register from '@/components/Register'
import Bookcase from '@/components/Bookcase'
import Search from '@/components/Search'
import Forcus from '@/components/Forcus'
import Head from '@/components/Head'

Vue.use(Router)
Vue.use(VueResource)
Vue.component("head-component", Head);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/bookcase',
      name: 'Bookcase',
      component: Bookcase
    },
    {
      path: '/user/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/user/forcus',
      name: 'Forcus',
      component: Forcus
    }
  ]
})
