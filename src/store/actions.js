import * as api from '../api'

export const updatePath = ({ commit }, payload) => {
  api.updatePath(payload, (response) => {
    commit('updatePath', { path: response.path, items: response.items })
  })
}
export const refreshList = ({ commit }) => {
  api.refreshList()
  commit('refreshList')
}
