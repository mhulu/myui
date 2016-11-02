import store from './../../store'
import Vue from 'vue'
import {API_ROOT} from './../../config'
// When the request succeeds
const success = (response) => {
  store.dispatch('getHealthOptions', response)
}

// When the request fails
const failed = () => {
}

export default () => {
  Vue.http.get(API_ROOT + 'options')
    .then((response) => {
      success(response.body.result)
    }, (response) => {
      failed(response.body.result)
    })
}
