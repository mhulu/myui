<template>
  <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="form-group">
              <label>
                <i class="fa fa-user"></i> 居民姓名: <span v-if="!step1.userName"><i class="fa fa-exclamation-circle text-red"></i></span><span v-else><i class="fa fa-check-circle text-blue"></i></span>
              </label>
              <input type="text" class="form-control underline" id="name" placeholder="输入居民的姓名" v-model="userInfo.userName">
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="form-group">
              <label>
                <i class="fa fa-credit-card"></i> 身份证: <span v-if="!step1.identify"><i class="fa fa-exclamation-circle text-red"></i></span><span v-else><i class="flash">{{parseId}}</i></span>
              </label>
              <input type="text" class="form-control underline" placeholder="15或18位身份证" v-model="userInfo.identify">
            </div>
          </div>
          <div class="col-md-3 col-sm-6"><label><i class="fa fa-institution"></i> 工作单位</label><input type="text" class="form-control underline" placeholder="可选填" v-model="userInfo.unit"></div>
          <div class="col-md-3 col-sm-6"><label><i class="fa fa-phone"></i> 本人电话</label><input type="text" class="form-control underline" placeholder="选填手机或固话" v-model="userInfo.phone"></div>
        </div>
        <div class="row">
          <toggle>
            <div slot="content">
              <div class="margin-top-15 fadeInUp">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>常住类型 <i class="fa fa-building"></i></label>
                      <div class="clip-radio radio-primary">
                        <input type="radio" id="local" value="户籍" v-model="userInfo.live">
                        <label for="local">户籍</label>
                        <input type="radio" id="nonlocal" value="非户籍" v-model="userInfo.live">
                        <label for="nonlocal">非户籍</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label>民族 <i class="fa fa-universal-access"></i></label>
                    <div class="row">
                      <div class="clip-radio radio-primary">

                        <input type="radio" id="han" value="汉族" v-model="userInfo.nation">
                        <label for="han">
                          汉族
                        </label>
                        <input type="radio" id="other" value="少数民族" v-model="userInfo.nation">
                        <label for="other">
                          <input type="text" class="underline" placeholder="少数民族" @click="userInfo.nation = ''"  v-model="userInfo.nation">
                        </label>

                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 form-group">
                    <label>血型 <i class="fa fa-tint"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.bloodType" class="form-control">
                        <option v-for="option in options.bloodType" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <label>文化程度 <i class="fa fa-graduation-cap"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.education" class="form-control">
                        <option v-for="option in options.education" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label>职业 <i class="fa fa-user-md"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.occupation" class="form-control">
                        <option v-for="option in options.occupation" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label>婚姻状况 <i class="fa fa-venus-mars"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.marriage" class="form-control">
                        <option v-for="option in options.marriage" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <label>支付方式 <i class="fa fa-rmb"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.payType" class="form-control">
                        <option v-for="option in options.payType" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label>药物过敏史 <i class="fa fa-yelp"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.allergy" class="form-control">
                        <option v-for="option in options.allergy" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label>暴露史 <i class="fa fa-street-view"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.exposure" class="form-control">
                        <option v-for="option in options.exposure" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                </div>
                <!-- <button-input title="既往史" :buttons="sicksBtn" :collection="userInfo.sicks" :options="options.sicks"></button-input> -->
                <!-- <button-input title="家族史" :buttons="familyBtn" :collection="userInfo.family" label="家族病史记录" :options="options.sicks"></button-input> -->
                <!-- <div class="row">
                  <div class="col-md-6">
                    <div class="form-group"><label>遗传病史 <i class="fa fa-share-alt"></i></label><input v-model="userInfo.inheritance" class="form-control underline" type="text" placeholder="输入遗传疾病名称"></div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>残疾情况 <i class="fa fa-wheelchair-alt"></i></label>
                      <span class="clip-select">
                        <select v-model="userInfo.disability" class="form-control">
                          <option v-for="option in options.disability" :value="option">{{option}}</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div> -->
                <!-- <button-input title="生活环境" :buttons="envBtn" :collection="userInfo.environment" option-nested="true" :options="options.enviroment"></button-input> -->
              </div>
            </div>
          </toggle>
        </div>
      </div>
</template>
<script>
  import toggle from '../../components/Toggle.vue'
  import buttonInput from '../../components/ButtonInput.vue'
  import {required, isChinese, isIdentify, parseIdentify} from '../../validator/validator'
  export default {
    props: {
      options: {
        type: Object
      },
      userInfo: {
        type: Object
      },
      validates: {
        type: Boolean
      }
    },
    data: function () {
      return {
        sicksBtn: ['疾病史', '手术史', '外伤史', '输血史'],
        familyBtn: ['父亲病史', '母亲病史', '兄弟姐妹病史', '子女病史'],
        envBtn: ['厨房排风设施', '燃料类型', '饮水', '厕所', '禽畜栏'],
        optionGroup: ['kitchen', 'elding', 'drink', 'lavatory', 'sty']
      }
    },
    methods: {
      parseIdentify () {
        var result = parseIdentify(this.userInfo.identify)
        this.userInfo.sex = result.sex
        this.userInfo.birthday = result.birthday
      }
    },
    computed: {
      parseId: function () {
        if (this.step1.identify) {
          var result = parseIdentify(this.userInfo.identify)
          return result.sex + '/' + result.birthday
        }
      },
      validates: function () {
        return [!(this.step1.identify && this.step1.userName), true, true, true]
      },
      options: function () {
        return this.$store.state.health.options
      },
      step1: function () {
        return {
          userName: required(this.userInfo.userName) && isChinese(this.userInfo.userName),
          identify: required(this.userInfo.identify) && isIdentify(this.userInfo.identify)
        }
      }
    },
    components: {
      buttonInput, toggle
    }
  }
</script>