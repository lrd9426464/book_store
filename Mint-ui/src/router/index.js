import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
// import update from '../views/update.vue'
import shopping from '../views/shopping.vue'
import Me from '../views/Me.vue'
import details from '../views/details.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/details/:did&:title&:price',
    component: details,
    props:true
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/shopping',
    component: shopping
  },
  // {
  //   path: '/update',
  //   component: update
  // },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
