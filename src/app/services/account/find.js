// import accountTransformer from './../../transformers/account'
import store from './../../store'
import Vue from 'vue'
import {API_ROOT} from './../../config'
// When the request succeeds
const success = (account) => {
  store.dispatch('getAccount', account)
}

// When the request fails
const failed = () => {
}

export default () => {
  Vue.http.get(API_ROOT + 'home/me')
    .then((response) => {
      success(response.body.result)
    }, (response) => {
      failed(response.body.result)
    })
}
