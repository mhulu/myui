import Vue from 'vue'
import {
  LOGOUT,
  CHECK_AUTHENTICATION,
  LOGIN
} from './../../mutation-types'

export default {
  [CHECK_AUTHENTICATION] (state) {
    state.authenticated = !!window.localStorage.getItem('id_token')
    if (state.authenticated) {
      Vue.http.headers.common.Authorization = `Bearer ${window.localStorage.getItem('id_token')}`
    }
  },

  [LOGIN] (state, token) {
    state.authenticated = true
    window.localStorage.setItem('id_token', token)
    Vue.http.headers.common.Authorization = `Bearer ${token}`
  },

  [LOGOUT] (state) {
    state.authenticated = false
    window.localStorage.removeItem('id_token')
    Vue.http.headers.common.Authorization = null
  }
}