import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'Header',
      component: () => import('./components/Header.vue')
    },
    {
      path: '/bio',
      name: 'Bio',
      component: () => import('./components/Bio.vue')
    },
    {
      path: '/highlights',
      name: 'Highlights',
      component: () => import('./components/Highlights.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./components/Contact.vue')
    }
  ]
})