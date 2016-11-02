<template>
    <a  title="全屏开关" v-on:click.prevent="fullscreen"> <i class="fa fa-expand" v-if="!isfullscreen"></i>  <i class="fa fa-compress" v-if="isfullscreen"></i></a>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
      methods: {
        ...mapActions({
          fullscreen: 'toggleFullscreen'
        })
      },
      computed: {
        ...mapGetters({
          isfullscreen: 'fullscreenStatus'
        })
      }
    }
</script>