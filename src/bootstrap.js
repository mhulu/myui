/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application
 */

/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue'

/* ============
 * Vue Resource
 * ============
 *
 * Vue Resource provides services for making web requests and handle
 * responses using a XMLHttpRequest or JSONP.
 *
 * https://github.com/vuejs/vue-resource/tree/master/docs
 */
import VueResource from 'vue-resource'
import authService from './app/services/auth'

Vue.use(VueResource)

Vue.http.headers.common.Accept = 'application/json'
Vue.http.options.root = process.env.API_LOCATION
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // When the token is invalid, log the user out
    if (response.status === 401) {
      authService.logout()
    }
    if (!response.ok) {
      Vue.prototype.$swal({
        title: '网络故障',
        text: '系统无法连接到服务器',
        type: 'error',
        allowOutsideClick: false,
        confirmButtonText: '重试一次'
      }).then(function () {
        window.location.reload()
      })
    }
  })
})

/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync'
import store from './app/store'

store.dispatch('checkAuthentication')

/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router'
import routes from './app/routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     */
    next({
      name: 'login.index'
    })
  } else if (to.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    next({
      name: 'account.show'
    })
  } else {
    next()
  }
})
VuexRouterSync.sync(store, router)

Vue.router = router

/* ============
 * Vee Validate
 * ============
 *
 * Internationalization plugin of Vue.js
 *
 *http://vee-validate.logaretm.com/
 */
import Validator from './app/validator/vee-validate'
Vue.use(Validator)
/**
 * ============
 * VueSweetAlert
 * ============
 * Usage:
 * Vue.prototype.$swal(...)
 */
import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)
/**
 * ==============
 * VueProgressBar
 * ==============
 */
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
/**
 * ==============================
 * VueResourceProgressbarInterceptor
 * ==============================
 */
import ProgressBarResource from 'vue-resource-progressbar-interceptor'
Vue.use(ProgressBarResource)

/* ============
 * underscore
 * ============
 *
 * Require underscore
 *
 */
import underscore from 'underscore'
window._ = underscore

/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 *
 * http://jquery.com/
 */
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery
/* ============
 * Bootstrap
 * ============
 *
 * Require bootstrap
 *
 * http://getbootstrap.com/
 */
// require('bootstrap')
require('bootstrap/less/bootstrap.less')

/* ============
 * Font Awesome
 * ============
 *
 * Require font-awesome
 *
 * http://http://fontawesome.io/
 */
require('font-awesome/less/font-awesome.less')

/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 *
 * Replace the stylus directory with the CSS preprocessor you want.
 * Require the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 */
require('./sass/app.scss')

export default {
  router
}
