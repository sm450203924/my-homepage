import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import(/* webpackChunkName: "skills" */ './views/Skills/index.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import(/* webpackChunkName: "works" */ './views/Works/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact/index.vue')
    }
  ]
})
