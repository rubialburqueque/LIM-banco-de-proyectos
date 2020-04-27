import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/users/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/most-recent',
    name: 'MostRecent',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/MostRecent.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/Movies.vue')
  },
  {
    path: '/my-list',
    name: 'MyList',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/MyList.vue')
  },
  {
    path: '/programs',
    name: 'Programs',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/Program.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/admi/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/admi/Register.vue')
  },
  {
    path: '/Sign-in-Movie',
    name: 'SignInMovie',
    component: () => import(/* webpackChunkName: "about" */ '../views/admi/SignInMovie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
