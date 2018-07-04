import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import creeatStore from './store'
import 'amfe-flexible'
import 'es6-promise/auto'


import defaultUi from './components/index.js'
Vue.use(defaultUi);
Vue.use(Vuex);
// vue-router 的狀態放進 vuex 的 state 中
const store = creeatStore();
sync(store, router);


Vue.config.productionTip = false
// 区分开发环境
window.$prod = process.env.NODE_ENV === 'production'

if ($prod) {
  //  解决移动端浏览器 300 毫秒点击延迟问题
  window.document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}


const vm = {
  el: "#app",
  router,
  store,
  render: h => h(App)
}
new Vue(vm)
