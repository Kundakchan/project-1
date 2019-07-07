import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, 700, { offset: -180 })
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }
  }
})
