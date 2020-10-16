import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  // 练习
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../views/learn/Home')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/learn/About')
  // },
  // {
  //   path: '/aside',
  //   name: 'Aside',
  //   component: () => import('../views/learn/Aside')
  // },
  // {
  //   path: '/plug',
  //   name: 'Plug',
  //   component: () => import('../views/learn/Plug')
  // },
  // andt
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    redirect: '/home',
    children: [
      // 首页
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: 'home首页'
        },
        component: () => import('../views/Home')
      },
      // 房源
      {
        path: '/house',
        name: 'House',
        meta: {
          title: '房源管理'
        },
        component: () => import('../views/House')
      },
      // 客源
      {
        path: '/client',
        name: 'Client',
        meta: {
          title: '客源管理'
        },
        component: () => import('../views/Client')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 未登录验证
  if(to.path !=='/login'){
    if(!sessionStorage.getItem('token')) return next('/login')
  }
  Nprogress.start()
  next()
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
