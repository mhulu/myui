import {FULLSCREEN} from './../../mutation-types'
import * as utils from '../../../utils'

export default {

  [FULLSCREEN] (state) {
    state.fullscreenStatus = !state.fullscreenStatus
    utils.fullscreen()
  }
}
