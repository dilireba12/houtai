import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(window.localStorage.getItem('token'))
  },
  mutations: {
    // 设置token值
    myToken (state, payload) {
      state.token = payload
      window.localStorage.setItem('token', JSON.stringify(payload))
    }
    // // 删除token
    // delUser (state) {
    //   state.toekn = ''
    // }
  },
  getters: {},
  actions: {
  },
  modules: {
    user
  }
})
