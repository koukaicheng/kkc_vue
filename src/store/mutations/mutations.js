import * as types from './mutations-types'
export default {
  [types.SET_USER](state, data) {
    state.userinfo = data;
    window.localStorage.setItem('USERINFO', JSON.stringify(data));
  },
}
