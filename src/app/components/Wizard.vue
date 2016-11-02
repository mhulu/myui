<template>
  <div>
      <div id="wizard" class="wizard">
        <ul>
          <li  v-for="(step, index) in steps" @click.stop.prevent="gotoStep(index + 1)">
            <a href="#" v-bind:class="{'selected' : currentStep >= index + 1, 'done' : currentStep > index + 1}">
              <div class="stepNumber">
                {{index + 1}}
              </div> <span class="stepDesc text-small"> {{step.desc}} </span>
            </a>
          </li>
        </ul>
        <!-- <validator name = 'validator'> -->
        <div v-for="(step, index) in steps" v-show="currentStep==index+1">
          <div class="row">
            <div class="col-md-12">
              <fieldset>
                <legend>
                  {{step.title}}
                </legend>
                <slot :name="index+1">{{step.desc}}</slot>
              </fieldset>
            </div>
          </div>
        </div>
        <!-- </validator> -->
      </div>
      <div class="row">
      <div class="col-md-12">
          <a class="btn btn-blue pull-right margin-left-15" :disabled="validates[currentStep-1]"  v-show="currentStep !== steps.length" @click.stop.prevent="nextStep">下一步</a>
          <a v-on:click="onDone" v-show="currentStep == steps.length" class="margin-left-15 btn btn-success pull-right">完成</a>
          <a class="btn btn-blue pull-right" v-show="currentStep !==1" @click.stop.prevent="prevStep">上一步</a>
      </div>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      steps: {
        type: Array,
        default: function () {
          return [{title: 'STEP1', desc: 'description 1'}, {title: 'STEP2', desc: 'description 2'}, {title: 'STEP3', desc: 'description3'}]
        }
      },
      validates: {
        type: Array,
        default: function () {
          return [false, true, false]
        }
      }
    },
    methods: {
      nextStep () {
        this.currentStep++
      },
      prevStep () {
        this.currentStep--
      },
      gotoStep (i) {
        if (!this.validates[this.currentStep - 1]) {
          this.currentStep = i
        }
      },
      onDone () {
        this.$emit('onDone')
      }
    },
    data () {
      return {
        currentStep: 1
      }
    }
  }
</script>
<style>
  .wizard > ul {
    display: table;
    list-style: none;
    padding: 10px 0;
    position: relative;
    width: 100%;
    background: #f7f7f8;
    border-radius: 5px;
  }
  .wizard > ul li {
    display: table-cell;
    text-align: center;
    width: 1%;
  }
  .wizard > ul li > a.selected .stepNumber {
    border-color: #58748B;
  }
  .wizard > ul .stepNumber {
    background-color: #ffffff;
    border: 5px solid #c8c7cc;
    border-radius: 100%;
    color: #546474;
    display: inline-block;
    font-size: 15px;
    height: 40px;
    line-height: 30px;
    position: relative;
    text-align: center;
    width: 40px;
    z-index: 2;
  }
  .wizard > ul li > a.selected:before, .wizard li > a.done:before {
    border-color: #58748B;
  }
  .wizard > ul li:first-child > a:before {
    left: 50%;
    max-width: 51%;
  }
  .wizard > ul li:last-child > a:before {
    max-width: 50%;
    width: 50%;
  }
  .wizard > ul li > a:before {
    border-top: 4px solid #c8c7cc;
    content: "";
    display: block;
    font-size: 0;
    height: 1px;
    overflow: hidden;
    position: relative;
    top: 21px;
    width: 100%;
    z-index: 1;
    transition: .45s ease all;
    -webkit-transition: .45s ease all;
  }
  .wizard > ul li .stepDesc {
    color: #8e8e93;
    display: block;
    font-size: 14px;
    margin-top: 4px;
    max-width: 100%;
    table-layout: fixed;
    text-align: center;
    word-wrap: break-word;
    z-index: 104;
  }
</style>