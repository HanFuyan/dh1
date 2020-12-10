import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dinghua/#/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dinghua/#/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/dinghua/#/case',
    name: 'Case',
    component: () => import('../views/Case.vue')
  },
  {
    path: '/dinghua/#/case/Security',
    name: 'Security',
    component: () => import('../views/case/Security.vue')
  },
  {
    path: '/dinghua/#/case/Emergency',
    name: 'Emergency',
    component: () => import('../views/case/Emergency.vue')
  },
  {
    path: '/dinghua/#/case/Perceive',
    name: 'Perceive',
    component: () => import('../views/case/Perceive.vue')
  },
  {
    path: '/dinghua/#/case/Supervision',
    name: 'Supervision',
    component: () => import('../views/case/Supervision.vue')
  },
  {
    path: '/dinghua/#/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/dinghua/#/project/Smartprison',
    name: 'Smartprison',
    component: () => import('../views/project/Smartprison.vue')
  },
  {
    path: '/dinghua/#/project/Supervision',
    name: 'Supervision',
    component: () => import('../views/project/Supervision.vue')
  },
  {
    path: '/dinghua/#/project/Park',
    name: 'Park',
    component: () => import('../views/project/Park.vue')
  },
  {
    path: '/dinghua/#/project/Detoxification',
    name: 'Detoxification',
    component: () => import('../views/project/Detoxification.vue')
  },
  {
    path: '/dinghua/#/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/dinghua/#/news/news1',
    name: 'news1',
    component: () => import('../views/news/news1.vue')
  },
  {
    path: '/dinghua/#/news/news2',
    name: 'news2',
    component: () => import('../views/news/news2.vue')
  },
  {
    path: '/dinghua/#/news/news3',
    name: 'news3',
    component: () => import('../views/news/news3.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
