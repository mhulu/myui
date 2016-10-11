<template>
  <VLayout>
        <h4 id="reset"><i class="fa fa-key"></i> 找回密码</h4>
    <!-- FORM START -->
        <form class="form-horizontal" action="/" method="post" @submit.prevent="onSubmit" >
         <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-mobile"></i> 手机号码 <i class="fa fa-exclamation-circle text-danger" v-show="errors.has('mobile')"></i></label>
          <div class="col-sm-9">
            <input type="text"  placeholder=" 输入手机号" name="mobile" v-validate data-rules="mobile" v-model="credentials.mobile" required class="form-control underline">
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-commenting-o"></i> 短信验证 <i class="fa fa-exclamation-circle text-danger" v-show="errors.has('authCode')"></i></label>
          <div class="col-sm-4">
            <input type="text"  placeholder=" 输入验证码" name="authCode" v-validate data-rules="alpha_num" v-model="credentials.authCode" required class="form-control underline">
          </div>
          <div class="col-sm-5">
            <send-authcode :data="{mobile:this.credentials.mobile}" :disabled="errors.has('mobile')||credentials.mobile===''"></send-authcode>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-key"></i> 输入密码</label>
          <div class="col-sm-9">
             <input type="text"  class="form-control underline" placeholder=" 输入您的密码" name="password" v-model="credentials.password" v-validate data-rules="confirmed:password_confirmation" required>
          </div>
        </div>

                <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-key"></i> 密码确认 <i class="fa fa-exclamation-circle text-danger" v-show="errors.has('password')"></i></label>
          <div class="col-sm-9">
             <input type="text"  class="form-control underline" name="password_confirmation" placeholder=" 再次输入您的密码" v-model="credentials.password_confirmation"  required>
          </div>
        </div>
        <div class="row">
           <div class="col-sm-12">
            <router-link :to="{name: 'login.index'}" class="pull-right" style="height: 43px;line-height: 43px;">已有账号，返回登录</router-link>
          </div>
         </div>
       <!--  <button type="submit" class="btn btn-light-blue btn-lg btn-block margin-bottom-10" @click.stop.prevent="signIn"><i class="fa fa-sign-in"></i> 确定</button> -->
        <input type="submit" class="btn btn-light-blue btn-lg btn-block margin-bottom-10" value="重置密码">
         </form>
  </VLayout>
</template>
<script>
  import VLayout from '../../layouts/minimal/minimal.vue'
  import Auth from '../../services/auth'
  import sendAuthcode from '../../components/sendAuthcode'
  export default {
    data () {
      return {
        credentials: {
          mobile: ''
        }
      }
    },
    methods: {
      onSubmit: function () {
        const user = {
          mobile: this.credentials.mobile,
          password: this.credentials.password,
          authCode: this.credentials.authCode
        }
        Auth.resetPass(user)
      }
    },
    components: {
      VLayout, sendAuthcode
    }
  }
</script>
<style lang="scss">
  @import '../../../sass/wemesh/variables';
  #reset {
    padding:10px 0 10px 0;
    font-weight: 400;
    color: #fff;
    background-color: $primary;
  }
</style>