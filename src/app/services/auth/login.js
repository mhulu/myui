import Vue from 'vue'
import accountService from './../account'
import store from './../../store'
import {API_ROOT} from './../../config'

// When the request succeeds
const success = (token) => {
  store.dispatch('login', token)
  accountService.find()
  Vue.router.push({
    name: 'home.index'
  })
}

// When the request fails
const failed = (res) => {
  Vue.prototype.$swal({
    title: '登录失败',
    text: res.body.result,
    type: 'error',
    confirmButtonText: '返回重写'
  })
}

export default (user) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   */
  Vue.http.post(API_ROOT + 'auth/login', user)
    .then((res) => {
      success(res.body)
    }, (res) => {
      failed(res)
    })
}
