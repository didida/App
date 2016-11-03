import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// 引入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
