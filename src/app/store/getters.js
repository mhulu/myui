/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */
export const fullscreenStatus = state => state.fullscreen.fullscreenStatus
export const account = state => state.account.userInfo
export const menus = state => state.account.menus
export const roles = state => state.account.roles[0]
export const options = state => state.health.options
