import tsHeader from './module/Header/Header.vue'
import Page from './module/Page/Page.vue'
import dsFooter from './module/Footer/Footer.vue'

const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(Page.name, Page)
  Vue.component(dsFooter.name, dsFooter)
  Vue.component(tsHeader.name, tsHeader)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
