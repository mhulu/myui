import Vue from 'vue'
import store from './../../store'
import {API_ROOT} from './../../config'
// TODO: 函数体不能为空，除了刷新页面有没有更好的体验?
const success = (token) => {
  // store.dispatch('login', token)
  // Vue.router.push({
  //   name: 'home.index'
  // })
  window.location.reload()
}

// When the request fails
const failed = (response) => {
  Vue.prototype.$swal({
    title: '需要重新登录',
    text: response,
    type: 'error',
    confirmButtonText: '重新填写'
  }).then(() => {
    store.dispatch('logout')
    window.location.reload()
  })
}
export default () => {
  Vue.http.get(API_ROOT + 'auth/refreshToken')
    .then((response) => {
      success(response.body.result)
    }, (response) => {
      failed(response.body.result)
    })
}
