// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import storeList from './store'
import routerList from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import comp from './components/atomComponent'
import client from './client'
import 'default-passive-events'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(comp)
Vue.use(ElementUI)

const router = new VueRouter(routerList)
const store = new Vuex.Store(storeList)

/* eslint-disable no-new */
window.client = client
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
