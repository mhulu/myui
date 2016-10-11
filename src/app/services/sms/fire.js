import Vue from 'vue'

// When the request succeeds
const success = (res) => {
  Vue.prototype.$swal({
    title: '短信发送成功',
    text: res.result,
    type: 'success',
    confirmButtonText: '继续操作'
  })
}

// When the request fails
const failed = (res) => {
  Vue.prototype.$swal({
    title: '短信发送失败',
    text: res.result,
    type: 'error',
    confirmButtonText: '返回登录'
  })
}

export default (url, data) => {
  /*
   * Normally you would perform an AJAX-request.
   * But to get the example working, the data is hardcoded.
   */
  Vue.http.post(url, data)
    .then((res) => {
      success(res.body)
    }, (res) => {
      failed(res.body)
    })
}
