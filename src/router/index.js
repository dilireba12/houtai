import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home')
const classParm = () => import('@/views/classParm')
const dataReport = () => import('@/views/dataReport')
const goodsClass = () => import('@/views/goodsClass')
const goodsList = () => import('@/views/goodsList')
const orderList = () => import('@/views/orderList')
const qxList = () => import('@/views/qxList')
const roleList = () => import('@/views/roleList')
const userList = () => import('@/views/userList')
const Second = () => import('@/views/Home/Second.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/Login') },
  {
    path: '/home',
    redirect: '/home/second',
    component: Home,
    children: [
      { path: 'second', component: Second },
      { path: 'classParm', component: classParm },
      { path: 'dataReport', component: dataReport },
      { path: 'goodsClass', component: goodsClass },
      { path: 'goodsList', component: goodsList },
      { path: 'orderList', component: orderList },
      { path: 'qxList', component: qxList },
      { path: 'roleList', component: roleList },
      { path: 'userList', component: userList }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
