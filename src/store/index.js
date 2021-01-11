import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    singleData: {}
  },
  mutations: {
    setData: (state, result) => (state.data = result),
    setSingleData: (state, result) => (state.singleData = result)
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
    },
    async fetchSingle({commit}, {category, id}) {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/${category}/${id}`)
        commit('setSingleData', res.data)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  getters: {
    categoryData(state) {
      return state.data
    },
    singleData(state) {
      return state.singleData
    }
  },
  modules: {
  }
})
