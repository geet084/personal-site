import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Bio from './components/Bio.vue'
import Highlights from './components/Highlights.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/highlights',
      name: 'Highlights',
      component: Highlights
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})