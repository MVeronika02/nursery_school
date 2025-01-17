import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
      children: [
        {
          path: '/',
          name: 'Content',
          component: Content
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/contacts',
          name: 'Contacts',
          component: Contacts
        }
      ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
