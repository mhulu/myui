import Vue from 'vue'

// When the request succeeds
const success = (response) => {
  Vue.prototype.$swal({
    title: '短信已发送',
    text: response,
    type: 'success',
    allowOutsideClick: false,
    confirmButtonText: '继续操作'
  })
}

// When the request fails
const failed = (response) => {
  Vue.prototype.$swal({
    title: '短信发送失败',
    text: response,
    type: 'error',
    allowOutsideClick: false,
    confirmButtonText: '重新填写'
  })
}

export default (url, data) => {
  Vue.http.post(url, data)
    .then((response) => {
      success(response.body.result)
    }, (response) => {
      failed(response.body.result)
    })
}
