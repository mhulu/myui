<template>
<VLayout>
         <!-- TAB START -->
        <div class="login-tab row margin-top-20">
          <div class="col-sm-12 tab-headers">
          <router-link :to="{name:'login.index'}" class="col-sm-6 active">用户登录</router-link>
          <router-link :to="{name:'register.index'}" class="col-sm-6">注册新用户</router-link>
          </div>
        </div>
        <!-- FORM START -->
        <div class="form">
          <form action="/" method="post" @submit.prevent="onSubmit" >
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-mobile" style="font-size: 20px;width:14px"></i></div>
                <input type="text" class="form-control" v-validate data-rules="required|mobile" required placeholder=" 输入手机号" name="mobile" v-model="credentials.mobile" >
              </div>
              <p class="text-danger" v-show="errors.has('mobile')">{{errors.first('mobile')}}</p>
            </div>
            <div class="form-group">
             <div class="input-group">
               <div class="input-group-addon"><i class="fa fa-key"></i></div>
               <input type="password" class="form-control" required placeholder=" 输入您的密码" name="password" v-model="credentials.password">
             </div>
           </div>
           <div class="row">
          <div class="col-sm-12">
            <router-link :to="{name: 'reset.index'}" class="pull-right" style="height: 43px;line-height: 43px;">找回密码？</router-link>
          </div>
          </div>
          <button  class="btn btn-light-blue btn-lg btn-block margin-bottom-10"><i class="fa fa-sign-in"></i> 点击登陆</button>
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
    onSubmit: function () {
      const user = {
        mobile: this.credentials.mobile,
        password: this.credentials.password
      }
      Auth.login(user)
    }
  }
}
</script>
