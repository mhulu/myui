import {
  GET_ACCOUNT
} from './../../mutation-types'

export default {
  [GET_ACCOUNT] (state, account) {
    state.userInfo = account.userInfo
    state.menus = account.menus
    state.roles = account.roles
    // state.username = account.baseInfo.realname
  }
}
