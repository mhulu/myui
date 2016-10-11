
/**
 * Validator class
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

class Validator
{
  /**
   * Create a new instance.
   * @param object data
   * @param object rules
   */
  constructor (data, rules, messages) {
    // contains the validation errors.
    this.errors = []

    // the data to be checked out.
    this.data = data

    // the rules required.
    this.rules = rules

    // Error messages container.
    this.messages = messages
  }

  /**
   * Create a new static instance.
   * @param object data
   * @param object rules
   */
  static make (data, rules, messages) {
    let validate = new Validator(data, rules, messages)
    return validate.handle()
  }

  /**
   * Walk through the validations rules.
   * @returns void
   */
  handle () {
    let methods = null
    for (let rule in this.rules) {
      methods = this.rules[rule].split(',')
      this.evaluate(methods, rule)
    }

    return this.errors
  }

  /**
   * Evaluate the input against rules.
   * @param methods
   * @param value
   * @returns array
   */
  evaluate (methods, field) {
    let value = this.data[field]

    for (let method in methods) {
      // if the rule required exits and there was an error, the
      // stack errors method is called to keep track of rules
      // that did not pass the validation.
      if (this[methods[method]] && !this[methods[method]](value)) {
        this.stackErrors({
          key: field, // evaluated field.
          error: this.messages[methods[method]]
        })
      }
    }
  }

  /**
   * keep errors tracked out.
   * @param data
   */
  stackErrors (data) {
    if (!this.errors.find((error) => error.key === data.key)) {
      this.errors[data.key] = data.error
    }
  }

  /**
   * No blank fields.
   * @param string value
   * @return boolean
   */
  required (value) {
    if (typeof value === 'boolean') {
      return value
    }
    return !((value === null) || (value.length === 0))
  }

  /**
   * Numeric rule.
   * @param string value
   * @return boolean
   */
  numeric (value) {
    return (/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(value)
  }

  /**
   * Integer rule.
   * @param string value
   * @return boolean
   */
  integer (value) {
    return (/^(-?[1-9]\d*|0)$/).test(value)
  }

  /**
   * Digits rule.
   * @param string value
   * @return boolean
   */
  digits (value) {
    return (/^[\d() \.:\-\+#]+$/).test(value)
  }

  /**
   * Alpha rule.
   * @param string value
   * @return boolean
   */
  alpha (value) {
    return (/^[a-zA-Z]+$/).test(value)
  }

  /**
   * Alpha num rule.
   * @param string value
   * @return boolean
   */
  alphaNum (value) {
    return !(/\W/).test(value)
  }

  /**
   * Emails rule.
   * @param string value
   * @return boolean
   */
  email (value) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
  }

  /**
   * Url rule.
   * @param string value
   * @return boolean
   */
  url (value) {
    return (/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(value)
  }

  isInteger (val) {
    return /^(-?[1-9]\d*|0)$/.test(val)
  }

  /**
   * Length rule.
   * @param string value
   * @return boolean
   */
  minlength (val, min) {
    if (typeof val === 'string') {
      return this.isInteger(min, 10) && val.length >= parseInt(min, 10)
    } else if (Array.isArray(val)) {
      return val.length >= parseInt(min, 10)
    } else {
      return false
    }
  }

  maxlength (val, max) {
    if (typeof val === 'string') {
      return this.isInteger(max, 10) && val.length <= parseInt(max, 10)
    } else if (Array.isArray(val)) {
      return val.length <= parseInt(max, 10)
    } else {
      return false
    }
  }

  chinese (val) {
    return /^[\u4e00-\u9fa5]+$/.test(val)
  }
  /**
   * Check whether the values has a blank value.
   * @param string value
   * @return boolean
   */
  blank (value) {
    return value && value.trim() !== ''
  }

  /**
   * Check whether the values has ISO date format.
   * @param string value
   * @return boolean
   */
  dateISO (value) {
    return (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/).test(value)
  }
  /**
   * Check whether the value is a type of Chinese mobile number.
   * @param  string value
   * @return  boolean
   */
  mobile (value) {
    return /^1[3|4|5|7|8]\d{9}$/.test(value)
  }
}
module.exports = Validator
