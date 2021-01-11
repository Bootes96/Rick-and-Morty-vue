import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from '../views/Character/Characters.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/episode',
    name: 'Episodes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Episode/Episodes.vue')
  },
  {
    path: '/location',
    name: 'Locations',
    component: () => import('../views/Location/Locations.vue')
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: () => import('../views/Character/Character.vue')
  },
  {
    path: '/episode/:id',
    name: 'Episode',
    component: () => import('../views/Episode/Episode.vue')
  },
  {
    path: '/location/:id',
    name: 'Location',
    component: () => import('../views/Location/Location.vue')
  }
]

const router = new VueRouter({
  base: '/rick-and-morty',
  mode: 'history',
  routes
})

export default router
