<template>
  <div class="breadcrumb-wrapper" v-if="currentRoute">
    <h4 class="mainTitle no-margin"><i class="fa"v-bind:class="currentRoute.icon"></i> {{currentRoute.name}}</h4>
    <small>{{currentRoute.description}}</small>
  </div>
</template>

<script>
import _ from 'underscore'
export default {
  computed: {
    menuList () {
      return this.$store.getters.menus
    },
    currentPath () {
      return this.$route.path
    },
    currentRoute () {
      var currentPath = this.currentPath
      var collect = _.where(this.menuList, {url: '/' + currentPath.split('/')[1]})
      return _.first(_.toArray(collect))
    }
  }
}
</script>