<template>
  <div class="row">
    <div class="col-md-12">
      <fieldset>
        <legend>{{title}}</legend>
        <div class="row">
          <div class="col-md-2">
            <label class="text-bold text-purple label-lg">{{label}}</label> <span class="badge badge-purple">{{collection.length}}</span>
          </div>
          <div class="col-md-10">
            <div style="float:left">
              <a  v-for="(btn, index) in buttons" style="margin:0 2px 0 2px" class="btn" :class="[styles[index]]" @click.stop.prevent="onClickBtn($event, index)">{{btn}}</a>
            </div>
            <div style="float:left; margin-left:15px" v-show="showOption">
              <span class="clip-select">
                <select v-model="selected" class="form-control">
                  <option>辅助选项</option>
                  <option v-for="option in currentOption" v-bind:value="option.value">{{option.text}}</option>
                </select>
              </span>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-md-12">
            <ul  class="list-unstyled sicks">
              <li class="margin-top-15">
                <input type="text" class="form-control  underline input-title" v-show="showInput" ref="newtext" v-model="newText" :placeholder="'输入' + textPre" @keyup.enter="addNew($event)">
                <a class="btn-success input-btn fadeIn" v-show="this.newText.trim() !=''" @click="addNew($event)"><i class="fa fa-plus"></i></a>
              </li>
              <li v-for="item in collection" v-bind:key="item.index">
                <input type="text" v-model="items.item" class="form-control underline margin-top-15">
                <a class="btn-danger input-btn" @click="remove(item)"><i class="fa fa-times"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
  import _ from 'underscore'
  export default {
    props: {
      collection: {
        type: Array,
        default: ['aaa', 'bbb']
      },
      title: {
        type: String,
        default: 'TITLE'
      },
      buttons: {
        type: Array,
        default: ['按钮1', '按钮2', '按钮3']
      },
      label: {
        type: String,
        default: '记录数目'
      },
      options: {}
    },
    data () {
      return {
        styles: ['btn-dark-purple', 'btn-blue', 'btn-yellow', 'btn-red', 'btn-light-blue', 'btn-dark-red', 'btn-yellow'],
        showInput: false,
        showOption: false,
        newText: '',
        textPre: '',
        selected: '',
        currentOption: '',
        items: {}
      }
    },
    methods: {
      onClickBtn (e, index) {
        if (!_.isEmpty(this.options)) {
          var keys = _.keys(this.options)
          this.showOption = true

          if (keys[0] !== '0') {
            this.currentOption = this.options[keys[index]]
          } else {
            this.currentOption = this.options
          }
        }
        this.newText = ''
        this.showInput = true
        this.$refs.newtext.focus()
        this.textPre = e.target.innerText
      },
      addNew (e) {
        var value = this.newText && this.newText.trim()
        if (!value) {
          return
        }
        this.collection.push(this.textPre + ':' + this.newText)
        this.newText = ''
      },
      remove (item) {
        var index = this.collection.indexOf(item)
        this.collection.splice(index, 1)
      }
      // onChanged () {
      //   this.newText += this.selected
      // }
    }
  }
</script>
<style>
  .label-lg{
    height: 34px;
    line-height: 34px;
    text-align: right;
  }
  .input-title{
    border: 1px dotted #c8c7cc !important;
  }
  .sicks li{
    position: relative;
  }
  .input-btn {
    position: absolute;
    top: 0;
    text-align: center;
    right: 6px;
    bottom: 0;
    width: 28px;
    height: 28px;
    margin: auto 0;
    font-size: 18px;
    color: #fff;
    background-color: #d21818;
    margin-bottom: 10px;
    transition: color 0.2s ease-out;
    border:0;
  }
</style>