import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

// 子模块
import Home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    Home
  }
})
