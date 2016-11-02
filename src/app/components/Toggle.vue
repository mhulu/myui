<template>
  <div>
    <span class="text-bold title"><slot name="text">填写可选内容？ </slot></span>
    <span class="switch" :class="[ checked ? 'checked' : '']"
    @click.stop.prevent="toggle()">
    <small></small>
    <input type="checkbox" ng-model="switchsetting" style="display:none">
    <span class="switch-text"></span>
  </span>
  <div v-show="checked">
    <slot name="content">
    </slot>
  </div>
</div>
</template>
<script>
// Usage:
// <toggle style="btn-danger"> 默认为default-primary
// <div slot="text">按钮文字</div>  默认为 '填写可选内容''
// <div slot="content" class="col-md-12">隐藏内容</div>
// </toggle>
export default {
  data: function () {
    return {
      checked: false
    }
  },
  methods: {
    toggle: function () {
      this.checked = !this.checked
    }
  }
}
</script>
<style>
  .title{
    float: left;
  }
  .switch.checked {
    background: #64bd63;
    border-color: #64bd63;
  }
  .switch.checked small {
    left: 20px;
  }
  .switch .switch-text {
    font-size: 13px;
  }
  .switch small {
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    transition: .3s ease-out all;
    -webkit-transition: .3s ease-out all;
  }
  .switch {
    background: #fff;
    border: 1px solid #dfdfdf;
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    overflow: visible;
    width: 40px;
    height: 20px;
    padding: 0;
    margin: 0 0 0 10px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    transition: .3s ease-out all;
    -webkit-transition: .3s ease-out all;
    top: -1px;
  }
</style>