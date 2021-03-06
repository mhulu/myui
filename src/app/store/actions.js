/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types'

// Account
export const getAccount = ({ commit }, account) => {
  commit(types.GET_ACCOUNT, account)
}
// getHealth
export const getHealthOptions = ({ commit }, options) => {
  commit(types.GET_HEALTH, options)
}
// Auth
export const login = ({ commit }, token) => {
  commit(types.LOGIN, token)
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
}

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION)
}

export const toggleFullscreen = ({commit}) => {
  commit(types.FULLSCREEN)
}
