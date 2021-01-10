import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '../views/Character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Character
  },
  {
    path: '/episode',
    name: 'Episodes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Episode.vue')
  },
  {
    path: '/location',
    name: 'Locations',
    component: () => import('../views/Location.vue')
  }
]

const router = new VueRouter({
  base: '/rick-and-morty',
  mode: 'history',
  routes
})

export default router
