import Vue from 'vue'
import {API_ROOT} from './../../config'

// When the request succeeds
const success = (response) => {
  Vue.prototype.$swal({
    title: '操作成功',
    text: response,
    type: 'success',
    allowOutsideClick: false,
    confirmButtonText: '返回登录'
  }).then(() => {
    Vue.router.push({
      name: 'login.index'
    })
  })
}

// When the request fails
const failed = (response) => {
  Vue.prototype.$swal({
    title: '操作失败',
    text: response,
    type: 'error',
    allowOutsideClick: false,
    confirmButtonText: '重新填写'
  })
}

export default (user) => {
  Vue.http.post(API_ROOT + 'auth/signup?findpass', user)
    .then((response) => {
      success(response.body.result)
    }, (response) => {
      failed(response.body.result)
    })
}
