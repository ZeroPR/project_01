import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Registros from './views/Registros.vue'
import Registrar from './views/Registrar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/registros',
      name: 'registros',
      component: Registros
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Registrar
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "login" */ './views/Home.vue')
    }
  ]
})
