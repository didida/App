import Vue from 'vue'
import VueRouter from 'vue-router'

// 文件路径
import index from '../view/Home.vue'
import BrandCar from '../view/BrandCar.vue'
import BrandCarDetails from '../view/BrandCarDetails.vue'
import demo from '../view/demo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mede: 'history',
  routes: [
    { name: 'index', path: '/', component: index },
    { name: 'car', path: '/car', component: BrandCar },
    { name: 'carDetails', path: '/car/:id', component: BrandCarDetails },
    { name: 'demo', path: '/demo', component: demo }
  ]
})

export default router
