import { createStore } from 'vuex'
import * as api from '../api'

const state = {
  path: '',
  items: []
}

const getters = {
  path: state => state.path,
  items: state => {
    return state.items
  }
}

const actions = {
  updatePath: ({ commit }, payload) => {
    console.log('updatepath')
    commit('setPath', { path: payload.path })
    api.updatePath(payload, (response) => {
      commit('updatePath', { path: response.path, items: response.items })
    })
  },

  refreshList: ({ commit }) => {
    api.refreshList()
    commit('refreshList')
  }
}

const mutations = {
  setPath: (state, data) => {
    state.path = data.path
  },

  updatePath: (state, data) => {
    state.path = data.path
    state.items = data.items
  },

  refreshList: state => {
  }
}

const store = createStore({
  state,
  getters,
  actions,
  mutations
})

export default store