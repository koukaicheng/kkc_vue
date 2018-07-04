import Vue from 'vue'
import Router from 'vue-router'

//  路由懒加载  目前官网文档推荐的方法  需要用到 syntax-dynamic-import插件
const home = () => import('../views/home/home.vue')
const demo1 =() => import('../views/demo1/demo1.vue')
const demo2 =() => import('../views/demo2/demo2.vue')
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }
  ]
})
export default router
