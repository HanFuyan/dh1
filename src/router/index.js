import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/project/Smartprison',
    name: 'Smartprison',
    component: () => import('../views/Project/Smartprison.vue')
  },
  {
    path: '/project/Supervision',
    name: 'Supervision',
    component: () => import('../views/Project/Supervision.vue')
  },
  {
    path: '/project/Park',
    name: 'Park',
    component: () => import('../views/Project/Park.vue')
  },
  {
    path: '/project/Detoxification',
    name: 'Detoxification',
    component: () => import('../views/Project/Detoxification.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/news/news1',
    name: 'news1',
    component: () => import('../views/news/news1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
