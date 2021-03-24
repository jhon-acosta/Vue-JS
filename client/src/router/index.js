import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/website/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/user-registration', name: 'ListUsers', component: () => import('../views/system/process/ListUsers') },
  { path: '/parent', name: 'Parent', component: () => import('../views/system/test/Parent') },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
