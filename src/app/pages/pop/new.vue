<template>
  <div>
    <h5 class="over-title margin-bottom-15">创建档案<span class="text-blue">只需4步</span></h5>
    <wizard :steps="steps" :validates="validates" v-on:onDone="onSubmit">
    <!-- SLOT 1 START -->
      <div slot="1" class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="form-group">
              <label>
                <i class="fa fa-user"></i> 居民姓名: <span v-if="!step1.userName"><i class="fa fa-exclamation-circle text-red"></i></span><span v-else><i class="fa fa-check-circle text-blue"></i></span>
              </label>
              <input type="text" class="form-control underline" id="name" placeholder="输入居民的姓名" v-model="userInfo.userName">
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="form-group">
              <label>
                <i class="fa fa-credit-card"></i> 身份证: <span v-if="!step1.identify"><i class="fa fa-exclamation-circle text-red"></i></span><span v-else><i class="flash">{{parseId.sex}}/{{parseId.birthday}}</i></span>
              </label>
              <input type="text" class="form-control underline" placeholder="15或18位身份证" v-model="userInfo.identify">
            </div>
          </div>
          <div class="col-md-4 col-sm-6"><label><i class="fa fa-phone"></i> 本人电话</label><input type="text" class="form-control underline" placeholder="选填手机或固话" v-model="userInfo.phone"></div>
        </div>
        <div class="row">
          <toggle>
            <div slot="content">
              <div class="margin-top-15 fadeInUp">
                <div class="row">

                <div class="col-md-4 col-sm-6">
                  <label><i class="fa fa-institution"></i> 工作单位</label>
                  <input type="text" class="form-control underline" placeholder="可选填" v-model="userInfo.unit"></div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label> <i class="fa fa-building"></i> 常住类型</label>
                      <div class="clip-radio radio-primary">
                        <input type="radio" id="local" value="户籍" v-model="userInfo.live">
                        <label for="local">户籍</label>
                        <input type="radio" id="nonlocal" value="非户籍" v-model="userInfo.live">
                        <label for="nonlocal">非户籍</label>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label> <i class="fa fa-universal-access"></i> 民族</label>
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
                  <!-- <div class="col-md-4 form-group">
                    <label>血型 <i class="fa fa-tint"></i></label>
                    <span class="clip-select">
                      <select v-model="userInfo.bloodType" class="form-control">
                        <option v-for="option in options.bloodType" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div> -->
                </div>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <label> <i class="fa fa-graduation-cap"></i> 文化程度</label>
                    <span class="clip-select">
                      <select v-model="userInfo.education" class="form-control">
                        <option v-for="option in options.education" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label> <i class="fa fa-user-md"></i> 职业</label>
                    <span class="clip-select">
                      <select v-model="userInfo.occupation" class="form-control">
                        <option v-for="option in options.occupation" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label> <i class="fa fa-venus-mars"></i> 婚姻状况</label>
                    <span class="clip-select">
                      <select v-model="userInfo.marriage" class="form-control">
                        <option v-for="option in options.marriage" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <label> <i class="fa fa-rmb"></i> 支付方式</label>
                    <span class="clip-select">
                      <select v-model="userInfo.payType" class="form-control">
                        <option v-for="option in options.payType" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label> <i class="fa fa-yelp"></i> 药物过敏史</label>
                    <span class="clip-select">
                      <select v-model="userInfo.allergy" class="form-control">
                        <option v-for="option in options.allergy" :value="option">{{option}}</option>
                      </select>
                    </span>
                  </div>
                  <div class="col-md-4 form-group">
                    <label> <i class="fa fa-street-view"></i> 暴露史</label>
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
      <!-- SLOT 2 START -->
      <div class="container fadeInUp" slot="2">
        <div class="row">
          <fieldset>
            <legend>一般状况</legend>
            <div class="row">
              <div class="col-md-4 form-group">
                <label>体温 (℃)</label>
                <input type="number" class="form-control underline" placeholder="输入体温" v-model="checkList.temprature">
              </div>
              <div class="col-md-4 form-group">
                <label>脉率 (次/分钟)</label>
                <input type="number" class="form-control underline" placeholder="输入脉率" v-model="checkList.pulse">
              </div>
              <div class="col-md-4 form-group">
                <label>呼吸频率 (次/分钟)</label>
                <input type="number" class="form-control underline" placeholder="输入呼吸频率" v-model="checkList.breathe">
              </div>
              <div class="col-md-4 form-group">
                <label>血压 (mmHg)</label>
                <div class="row">
                  <div class="col-md-6"><input type="number" class="form-control underline" placeholder="左侧压力" v-model="checkList.leftPressure"></div>
                  <div class="col-md-6"><input type="number" class="form-control underline" placeholder="右侧压力" v-model="checkList.rightPressure"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 form-group">
                <label>身高 (cm)</label>
                <input type="number" class="form-control underline" v-model="checkList.height" placeholder="输入身高">
              </div>
              <div class="col-md-4 form-group">
                <label>体重 (kg)</label>
                <input type="number" class="form-control underline" v-model="checkList.weight" placeholder="输入体重">
              </div>
              <div class="col-md-4 form-group">
                <label>腰围 (cm)</label>
                <input type="number" class="form-control underline" v-model="checkList.circle" placeholder="输入腰围">
              </div>
              <div class="col-md-4 form-group">
                <label>体质指数 (Kg/㎡)</label>
                <input type="number" class="form-control underline" v-model="checkList.bmi" placeholder="体质指数 BMI">
              </div>
            </div>
          </fieldset>
        </div>
        <div class="row">
          <fieldset>
            <legend>辅助检查</legend>
            <div class="row">
              <div class="col-md-12 form-group">
                <label>血常规 <i class="fa fa-eyedropper"></i></label>
                <div class="row">
                  <div class="col-md-4 form-group"><input type="number" class="form-control underline" placeholder="血红蛋白 (g/L)" v-model="checkList.hemoglobin"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="白细胞 (×10(9)/L)" v-model="checkList.whiteblood"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="血小板 (×10(9)/L)" v-model="checkList.thrombocyte"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="其它指标" v-model="checkList.other"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label>尿常规 <i class="fa fa-flask"></i></label>
                <div class="row">
                  <div class="col-md-4 form-group"><input type="number" class="form-control underline" placeholder="尿蛋白" v-model="checkList.pro"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="尿糖" v-model="checkList.sugar"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="尿酮体" v-model="checkList.body"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="尿潜血" v-model="checkList.blood"></div>
                </div>
              </div>
            </div>
            <div class="row">

              <div class="col-md-12 form-group">
                <label>肝功能 <i class="fa fa-area-chart"></i></label>
                <div class="row">
                  <div class="col-md-4 form-group"><input type="number" class="form-control underline" placeholder="血清谷丙转氨酶(U/L)" v-model="checkList.lung1"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="血清谷草转氨酶(U/L)" v-model="checkList.lung2"></div>
                  <div class="col-md-2"><input type="number" class="form-control underline" placeholder="白蛋白(g/L)" v-model="checkList.lung3"></div>
                  <div class="col-md-2"><input type="number" class="form-control underline" placeholder="总胆红素(μmol/L)" v-model="checkList.lung4"></div>
                  <div class="col-md-2"><input type="number" class="form-control underline" placeholder="结合胆红素(μmol/L)" v-model="checkList.lung5"></div>
                </div>
              </div>

            </div>
            <div class="row">

              <div class="col-md-12 form-group">
                <label>肾功能 <i class="fa fa-bar-chart-o"></i></label>
                <div class="row">
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="血清肌酐(μmol/L)" v-model="checkList.kidney1"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="血尿素氮(mmol/L)" v-model="checkList.kidney2"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="血钾浓度(mmol/L)" v-model="checkList.kidney3"></div>
                  <div class="col-md-4"><input type="number" class="form-control underline" placeholder="血钠浓度(mmol/L)" v-model="checkList.kidney4"></div>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label>血脂 <i class="fa fa-ge"></i></label>
                <div class="row">
                  <div class="col-md-4">
                    <input type="number" v-model="checkList.blood1" placeholder="总胆固醇(mmol/L)" class="form-control underline">
                  </div>
                  <div class="col-md-4">
                    <input type="number" v-model="checkList.blood2" placeholder="甘油三酯(mmol/L)" class="form underline">
                  </div>
                  <div class="col-md-4">
                    <input type="number" class="form-control underline" v-model="checkList.blood3" placeholder="血清低密度脂蛋白胆固醇">
                  </div>
                  <div class="col-md-4">
                    <input type="number" class="form-control underline" v-model="checkList.blood4" placeholder="血清高密度脂蛋白胆固醇">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>
                  B超 <i class="fa fa-rss"></i>
                </label>
                <div class="row">
                  <div class="clip-radio radio-primary">
                    <input type="radio" id="b_normal" value="正常" v-model="checkList.B">
                    <label for="b_normal">
                      正常
                    </label>
                    <input type="radio" id="b_innormal" value="异常" v-model="checkList.B">
                    <label for="b_innormal">
                      <input type="text" class="underline" placeholder="输入数据" @click="checkList.B = ''"  v-model="checkList.B">
                    </label>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <label>
                  胸部X线片 <i class="fa fa-universal-access"></i>
                </label>
                <div class="row">
                  <div class="clip-radio radio-primary">
                    <input type="radio" id="x_normal" value="正常" v-model="checkList.X">
                    <label for="x_normal">
                      正常
                    </label>
                    <input type="radio" id="x_innormal" value="异常" v-model="checkList.X">
                    <label for="x_innormal">
                      <input type="text" class="underline" placeholder="输入数据" @click="checkList.X = ''"  v-model="checkList.X">
                    </label>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="row">
              <div class="col-md-4">
                <label>空腹血糖 <i class="fa fa-pie-chart"></i></label><input type="text" class="form-control underline" placeholder="单位为(mmol/L或mg/dL)" v-model="checkList.bloodSugar">
              </div>
              <div class="col-md-5">
                <label>
                  心电图 <i class="fa fa-heartbeat"></i>
                </label>
                <div class="row">
                  <div class="clip-radio radio-primary">
                    <input type="radio" id="normal" value="正常" v-model="checkList.heartGraph">
                    <label for="normal">
                      正常
                    </label>
                    <input type="radio" id="innormal" value="异常" v-model="checkList.heartGraph">
                    <label for="innormal">
                      <input type="text" class="underline" placeholder="输入数据" @click="checkList.heartGraph = ''"  v-model="checkList.heartGraph">
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <label>尿微量白蛋白 <i class="fa fa-chain"></i> </label><input type="text" class="form-control underline" v-model="checkList.protein" placeholder="单位为(mg/dL)">
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <label>
                  大便潜血 <i class="fa fa-pied-piper"></i>
                </label>
                <div class="row">
                  <div class="clip-radio radio-primary">
                    <input type="radio" id="shit1" value="阴性" v-model="checkList.shit">
                    <label for="shit1">
                      阴性
                    </label>
                    <input type="radio" id="shit2" value="阳性" v-model="checkList.shit">
                    <label for="shit2">
                      阳性
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <label>糖化血红蛋白 <i class="fa fa-chain-broken"></i></label>
                <input type="number" v-model="checkList.redProtein" placeholder="单位为(%)" class="form-control underline">
              </div>
              <div class="col-md-4">
                <label>乙型肝炎表面抗原 <i class="fa fa-braille"></i></label>
                <div class="row">
                  <div class="clip-radio radio-primary">
                    <input type="radio" id="hbv1" value="阴性" v-model="checkList.hbv">
                    <label for="hbv1">
                      阴性
                    </label>
                    <input type="radio" id="hbv2" value="阳性" v-model="checkList.hbv">
                    <label for="hbv2">
                      阳性
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <!-- SLOT 3 START -->
      <div class="container fadeInUp" slot="3">
        
        <button-input title="健康评价" label="记录" :buttons="['体检无异常', '体检异常']" :collection.sync="guide.evaluate"></button-input>
        <div class="row">
          <div class="col-md-12">
            <fieldset>
              <legend>健康指导</legend>
              <div class="col-md-6">
                <h5>医生建议</h5>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="recommend1" value="纳入慢性病患者健康管理" v-model="guide.recommend">
                  <label for="recommend1">
                  纳入慢性病患者健康管理
                  </label>
                </div>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="recommend2" value="建议复查" v-model="guide.recommend">
                  <label for="recommend2">
                  建议复查
                  </label>
                </div>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="recommend3" value="建议转诊" v-model="guide.recommend">
                  <label for="recommend3">
                  建议转诊
                  </label>
                </div>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="recommend4" value="无" v-model="guide.recommend">
                  <label for="recommend4">
                  无
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <h5>危险因素控制</h5>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="control1" value="戒烟" v-model="guide.control">
                  <label for="control1">
                  戒烟
                  </label>
                </div>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="control2" value="健康饮酒" v-model="guide.control">
                  <label for="control2">
                  健康饮酒
                  </label>
                </div>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="control3" value="饮食" v-model="guide.control">
                  <label for="control3">
                  饮食
                  </label>
                </div>
                <div class="checkbox clip-check check-primary checkbox-inline">
                  <input type="checkbox" id="control4" value="锻炼" v-model="guide.control">
                  <label for="control4">
                  锻炼
                  </label>
                </div>
                <div class="row">
                  <div class="col-md-4 form-group">
                    <label>减体重：</label>
                    <input type="text" class="form-control underline" placeholder="目标(公斤)" v-model="guide.goal.weight">
                  </div>
                <div class="form-group col-md-8">
                  <label>接种疫苗：</label>
                  <input type="text" class="form-control underline" placeholder="疫苗名称" v-model="guide.goal.prevent">
                </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="container fadeInUp" slot="4">
      <div class="row">
        <div class="col-sm-12">
          <div class="panel panel-note">
            <div class="panel-heading">
              <h4 class="text-bold text-primary text-extra-large center padding-bottom-10" style="border-bottom:1px dashed #ccc">体检报告</h4>
            </div>
            <div class="panel-body">
              <div class="margin-bottom-15">
                <h5>基本信息</h5>
                <!-- <span class="margin-right-15 text-bold">姓名：{{userInfo['userName']}}</span>
                <span  class="margin-right-15 text-bold">性别：{{parseId['sex']}}</span>
                <span class="margin-right-15 text-bold">年龄：{{parseId['age']}}</span>
                <span class="margin-right-15 text-bold">身份证：{{userInfo['identify']}}</span> -->
                <span class="margin-right-15 text-bold" v-for="(item, index) in otherInfo">{{index}}: {{item}}</span>
              </div>
              <div class="margin-bottom-15">
                <h5>健康体检</h5>
                <span class="margin-right-15 text-bold" v-for="(item, index) in healthInfo">{{index}}: {{item}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </wizard>
  </div>
</template>
<script>
  import wizard from '../../components/Wizard.vue'
  import toggle from '../../components/Toggle.vue'
  import buttonInput from '../../components/ButtonInput.vue'
  import Health from '../../services/health'
  import {required, isChinese, isIdentify, parseIdentify} from '../../validator/validator'
  import {map} from './map'
  import _ from 'underscore'
  import moment from 'moment'
  export default {
    created: function () {
      Health.options()
    },
    data: function () {
      return {
        currentStep: 1,
        userInfo: {
          userName: '',
          identify: '',
          unit: '',
          phone: '',
          live: '',
          nation: '',
          bloodType: '',
          marriage: '',
          payType: '',
          allergy: '',
          occupation: '',
          exposure: '',
          education: ''
        },
        checkList: {
          temprature: '',
          pulse: '',
          breathe: '',
          leftPressure: '',
          rightPressure: '',
          height: '',
          weight: '',
          circle: '',
          bmi: '',
          // bloodRoutine: {
          hemoglobin: '',
          whiteblood: '',
          thrombocyte: '',
          other: '',
          // },
          // urinalysis: {
          sugar: '',
          body: '',
          blood: '',
          pro: '',
          // },
          lung5: '',
          lung4: '',
          lung3: '',
          lung2: '',
          lung1: '',
          kidney1: '',
          kidney2: '',
          kidney3: '',
          kidney4: '',
          blood1: '',
          blood2: '',
          blood3: '',
          blood4: '',
          B: '',
          X: '',
          bloodSugar: '',
          heartGraph: '',
          protein: '',
          shit: '',
          redProtein: '',
          hbv: ''
        },
        guide: {
          evaluate: [],
          goal: {
            weight: '',
            prevent: ''
          },
          control: [],
          recommend: []
        },
        steps: [{title: '基本信息', desc: '填写居民基本信息'}, {title: '健康体检', desc: '填写居民体检信息'}, {title: '评价指导', desc: '健康评价和指导'}, {title: '核对信息', desc: '核对信息'}]
      }
    },
    computed: {
      parseId: function () {
        if (this.step1.identify) {
          var result = parseIdentify(this.userInfo.identify)
          return {
            sex: result.sex,
            birthday: result.birthday,
            age: moment().diff(result.birthday, 'years', false)
          }
        }
      },
      validates: function () {
        return [!(this.step1.identify && this.step1.userName), false, false, false]
      },
      options: function () {
        return this.$store.state.health.options
      },
      step1: function () {
        return {
          userName: required(this.userInfo.userName) && isChinese(this.userInfo.userName),
          identify: required(this.userInfo.identify) && isIdentify(this.userInfo.identify)
        }
      },
      otherInfo: function () {
        var userInfo = _.extend(_.pick(this.userInfo, _.identity), this.parseId)
        // 转换成映射表的中文
        var result = _.reduce(userInfo, function (result, val, k) {
          k = map[k] || k
          result[k] = val
          return result
        }, {})
        return result
      },
      healthInfo: function () {
        var healthInfo = _.pick(this.checkList, _.identity)
        // 转换成映射表的中文
        return _.reduce(healthInfo, function (result, val, k) {
          k = map[k] || k
          result[k] = val
          return result
        }, {})
      }
    },
    methods: {
      // parseIdentify () {
      //   var result = parseIdentify(this.userInfo.identify)
      //   this.userInfo.sex = result.sex
      //   this.userInfo.birthday = result.birthday
      // },
      onSubmit () {
        this.$swal({
          title: '操作成功',
          text: '档案创建成功',
          type: 'success',
          allowOutsideClick: false,
          confirmButtonText: '确定'
        })
      }
    },
    components: {
      wizard, toggle, buttonInput
    }
  }
</script>