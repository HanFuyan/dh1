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
    path: '/case',
    name: 'Case',
    component: () => import('../views/Case.vue')
  },
  {
    path: '/case/Security',
    name: 'Security',
    component: () => import('../views/case/Security.vue')
  },
  {
    path: '/case/Emergency',
    name: 'Emergency',
    component: () => import('../views/case/Emergency.vue')
  },
  {
    path: '/case/Perceive',
    name: 'Perceive',
    component: () => import('../views/case/Perceive.vue')
  },
  {
    path: '/case/Supervision',
    name: 'Supervision',
    component: () => import('../views/case/Supervision.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/project/Smartprison',
    name: 'Smartprison',
    component: () => import('../views/project/Smartprison.vue')
  },
  {
    path: '/project/Supervision',
    name: 'Supervision',
    component: () => import('../views/project/Supervision.vue')
  },
  {
    path: '/project/Park',
    name: 'Park',
    component: () => import('../views/project/Park.vue')
  },
  {
    path: '/project/Detoxification',
    name: 'Detoxification',
    component: () => import('../views/project/Detoxification.vue')
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
  },
  {
    path: '/news/news2',
    name: 'news2',
    component: () => import('../views/news/news2.vue')
  },
  {
    path: '/news/news3',
    name: 'news3',
    component: () => import('../views/news/news3.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: '/dinghua/#/',
  routes
})

export default router
