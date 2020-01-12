import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import About from '../views/about'
import MyDisk from '../views/mydisk'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/mydisk',
    name: 'mydisk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MyDisk
  }
]

const router = new VueRouter({
  routes
})

export default router
