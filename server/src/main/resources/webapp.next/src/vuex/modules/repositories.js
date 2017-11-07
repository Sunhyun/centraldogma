import * as types from '../mutation-types'
import { getRepositories } from '@/services/repository'

const state = {
  repositories: []
}

const actions = {
  getRepositories: ({commit, state, dispatch}) => {
    commit(types.GET_REPOSITORIES, getRepositories())
  }
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.GET_REPOSITORIES] (state, repositories) {
    state.repositories = repositories
  }
}
const getters = {
  repositories: state => state.repositories
}

export default {
  state,
  actions,
  mutations,
  getters
}
