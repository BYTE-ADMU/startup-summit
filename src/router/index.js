import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Startups from '../views/Startup.vue'
import Partners from '../views/Partners.vue'
import FAQs from '../views/FAQ.vue'
// import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/startups',
    name: 'Startups',
    component: Startups
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: FAQs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
