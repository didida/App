import Vue from 'vue'
import VueRouter from 'vue-router'

// 文件路径
import index from '../view/Home.vue'
import BrandCar from '../view/BrandCar.vue'
import BrandCarDetails from '../view/BrandCarDetails.vue'
import Personal from '../view/Personal.vue'
import Landing from '../view/Landing.vue'
import Registered from '../view/Registered.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mede: 'history',
  routes: [
    { name: 'index', path: '/', component: index },
    { name: 'car', path: '/car', component: BrandCar },
    { name: 'carDetails', path: '/car/:id', component: BrandCarDetails },
    { name: 'personal', path: '/personal', component: Personal, meta: { requiresAuth: true } },
    { name: 'landing', path: '/landing', component: Landing },
    { name: 'registered', path: '/registered', component: Registered }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next({
      path: '/landing'
    })
  } else {
    next()
  }
})

export default router
