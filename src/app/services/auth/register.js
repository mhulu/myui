import Vue from 'vue'
import store from './../../store'
import {API_ROOT} from './../../config'

// When the request succeeds
const success = (token) => {
  store.dispatch('login', token)
  Vue.router.push({
    name: 'home.index'
  })
}

// When the request fails
const failed = (response) => {
  Vue.prototype.$swal({
    title: '登录失败',
    text: response.body.result[0],
    type: 'error',
    confirmButtonText: '重新填写'
  })
}

export default (user) => {
  Vue.http.post(API_ROOT + 'signup', user)
    .then((response) => {
      success(response.body.token)
    }, (response) => {
      failed(response)
    })
}
