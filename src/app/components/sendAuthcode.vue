<template>
  <div>
    <count-down v-on:event="getAuthCode" :disabled="disabled"></count-down>
  </div>
</template>
<script>
  import countDown from './countDown.vue'
  import {API_ROOT} from '../config'
  import Sms from '../services/sms'
  export default {
    props: {
      data: {
        type: Object,
        require: true
      },
      disabled: {
        type: Boolean,
        require: true
      }
    },
    methods: {
      getAuthCode: function () {
        if (this.$route.path === '/reset') {
          Sms.fire(API_ROOT + 'getsms?findpass', this.data)
        } else {
          Sms.fire(API_ROOT + 'getsms', this.data)
        }
      }
    },
    components: {
      countDown
    }
  }
</script>