<template>
  <div class="logo">
    <img :src="logoImg">
        <h5 v-html="logoName"></h5>
  </div>
</template>
<script>
import {siteInfo} from '../config'
export default {
  data: function () {
    return {
      logoImg: siteInfo.logoImg,
      logoName: siteInfo.logoName
    }
  }
}
</script>
<style lang="scss">
@import '../../sass/wemesh/variables';
.logo{
  padding:10px;
  margin-bottom:20px;
}
  h5{
    font-weight: 500 !important;
  }
</style>