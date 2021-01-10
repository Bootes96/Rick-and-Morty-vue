import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData: (state, result) => (state.data = result)
  },
  actions: {
    async fetchData({commit}, {category, pageNum}) {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/${category}/?page=${pageNum}`)
        res.data.info.category = category
        commit('setData', res.data)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  getters: {
    categoryData(state) {
      return state.data
    }
  },
  modules: {
  }
})
