const validator = {
  messages: {
    cn: (field, args) => {
      '手机格式不正确'
    }
  },
  validate(value) {
    return /^1[3|4|5|7|8]\d{9}$/.test(value)
  }
}

import {Validator} from 'vee-validate' 
Validator.extend('mobile', {
  getMessage: field => field + '不是手机号码',
  validate: value => !! value
})
let instance = new Validator({
  mobileField: 'mobile'
})
