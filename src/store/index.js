import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData: (state, data) => (state.data = data)
  },
  actions: {
    async fetchData({commit}, data = 'character') {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/${data}`)
        commit('setData', res.data.results)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  getters: {
    data(state) {
      return state.data
    }
  },
  modules: {
  }
})
