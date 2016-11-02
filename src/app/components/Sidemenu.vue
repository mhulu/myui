<template>
<nav id="sidemenu">
  <!-- start: SIDEBAR MENU -->
  <div class="navbar-title cl-effect-1">
</div>
  <ul class="main-navigation-menu">
        <li v-for="item in menus">
        <router-link :to="{path:'/'+item.url}" exact>
         <div class="item-content">
          <div class="item-media"><i class="fa" :class="item.icon"></i></div>
          <div class="item-inner">
            <span class="title" @click="showElement($event)">{{item.name}}</span><i v-if="item.submenu" class="fa fa-angle-down icon-arrow"></i>
          </div>
        </div>
        </router-link>
      <ul v-if="item.submenu" class="sub-menu fadeInRight">
        <li class="cl-effect-1" v-for="sub in item.submenu"><router-link :to="{path:'/'+sub.url}">{{sub.name}}</router-link></li>
      </ul>
    </li>  
</ul>
<!-- end: SIDEBAR MENU -->
</nav>
</template>

<script>
import {mapGetters} from 'vuex'
import * as utils from '../utils'

export default {
  computed: {
    ...mapGetters({
      menus: 'menus'
    })
  },
  methods: {
    showElement: function (event) {
      var el = this.$el
      var element = document.querySelectorAll('#sidemenu .main-navigation-menu .active')[0]
      if (typeof element !== 'undefined') {
        utils.removeClass(element, 'active')
      }
      if (el.tagName === 'UL') {
        event.preventDefault()
        utils.toggleClass('.sub-menu', el, 'show')
      }
    }
  }
}
</script>
<style>
  .cl-effect-1 a {
    padding: 10px;
    display: block;
    background: #58748B;
    font-size: 1.1em;
    color: #ffffff;
  }
  .cl-effect-1 a:hover {
    color: #fff !important;
  }
</style>