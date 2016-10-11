import {
  GET_ACCOUNT
} from './../../mutation-types'

export default {
  [GET_ACCOUNT] (state, account) {
    state.mobile = account.mobile
    state.username = account.username
  }
}
