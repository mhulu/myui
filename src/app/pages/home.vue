<template>
  <VLayout>
    <transition name="custom-classes-transition"
     mode="out-in"
     enter-active-class="fadeIn"
    leave-active-class="fadeOut"
    >
      <router-view></router-view>
    </transition>
  </VLayout>
</template>
<script>
  import VLayout from '../layouts/default/default.vue'
  export default {
    components: {
      VLayout
    }
  }
</script>