import {
  GET_HEALTH
} from './../../mutation-types'

export default {
  [GET_HEALTH] (state, data) {
    state.options = data
  }
}
