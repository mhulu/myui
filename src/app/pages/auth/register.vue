<template>
<VLayout>
         <!-- TAB START -->
        <div class="login-tab row margin-top-20">
          <!-- <div class="col-sm-12">
            <div class="col-sm-6">用户登陆</div>
            <div class="col-sm-6 tab active">注册新用户</div>         
          </div> -->
          <div class="col-sm-12 tab-headers">
          <router-link :to="{name:'login.index'}" class="col-sm-6">用户登录</router-link>
          <router-link :to="{name:'register.index'}" class="col-sm-6 active">注册新用户</router-link>
          </div>
        </div>
        
          <!-- 注册用户 -->
          <form class="form-horizontal" action="/" method="post" @submit.prevent="signUp">
         <div class="form-group">
          <label class="col-sm-3 control-label" for="mobile"><i class="fa fa-mobile"></i> 手机号码 <i class="fa fa-exclamation-circle text-danger" v-show="errors.has('newMobile')"></i></label>
          <div class="col-sm-9">
            <input type="text"  placeholder=" 输入手机号" name="newMobile" 
            v-model="credentials.newMobile" required class="form-control underline" v-validate data-rules="mobile">
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-commenting-o"></i> 短信验证 <i class="fa fa-exclamation-circle text-danger" v-show="errors.has('authCode')"></i></label>
          <div class="col-sm-5">
            <input type="text"  placeholder=" 输入您收到的短信验证码" name="authCode"
            v-model="credentials.authCode" v-validate data-rules="alpha_num" required class="form-control underline">
          </div>
          <div class="col-sm-4">
            <!-- <count-down v-on:event="getAuthCode" :disabled="errors.has('newMobile')||credentials.newMobile===''"></count-down> -->
            <send-authcode :data="{mobile:this.credentials.newMobile}" :disabled="errors.has('newMobile')||credentials.newMobile===''"></send-authcode>
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-key"></i> 输入密码</label>
          <div class="col-sm-9">
             <input type="password"  class="form-control underline" placeholder=" 密码长度要大于6位少于10位" name="password" 
             v-model="credentials.newPassword" required  v-validate data-rules="confirmed:newPassword_confirmation">
          </div>
        </div>
                <div class="form-group">
          <label class="col-sm-3 control-label"><i class="fa fa-key"></i> 密码确认 <i class="fa fa-exclamation-circle text-danger" v-show="errors.has('password')"></i></label>
          <div class="col-sm-9">
             <input type="password"  class="form-control underline" placeholder=" 再次输入您的密码" 
             v-model="credentials.newPassword_confirmation"  required name="newPassword_confirmation">
          </div>
        </div>
        <!-- <button class="btn btn-light-blue btn-lg btn-block margin-bottom-10" @click.stop.prevent="signUp"><i class="fa fa-sign-in"></i> 注册</button> -->
        <input type="submit" class="btn btn-light-blue btn-lg btn-block margin-bottom-10">
     </form>

        </div>
         
</VLayout>
</template>

<script>
import VLayout from '../../layouts/minimal/minimal.vue'
// import countDown from '../../components/countDown.vue'
import Auth from '../../services/auth'
import sendAuthcode from '../../components/sendAuthcode.vue'
// import Sms from '../../services/sms'
// import {API_ROOT} from '../../config'
export default {
  data: function () {
    return {
      credentials: {
        newMobile: '',
        authCode: ''
      }
    }
  },
  components: {
    VLayout, sendAuthcode
  },
  methods: {
    signUp: function () {
      const user = {
        newMobile: this.credentials.newMobile,
        newPassword: this.credentials.newPassword,
        authCode: this.credentials.authCode
      }
      Auth.register(user)
    }
  }
}
</script>
