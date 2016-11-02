import Vue from 'vue'
import store from './../../store'
import accountService from './../account'
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
const failed = (response) => {
  Vue.prototype.$swal({
    title: '注册失败',
    text: response,
    type: 'error',
    allowOutsideClick: false,
    confirmButtonText: '重新填写'
  })
}

export default (user) => {
  Vue.http.post(API_ROOT + 'auth/signup', user)
    .then((response) => {
      success(response.body.result)
    }, (response) => {
      failed(response.body.result)
    })
}
