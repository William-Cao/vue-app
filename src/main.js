// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'iview/dist/styles/iview.css';
// import iView from 'iview';

// import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';

import Vue from 'vue'
// import Vuex from 'vuex'
// import vuex from './vuex/vuex'

import App from './App'
import router from './router'
import http from './utils/http'
// import store from './store/store'
// Vue.use(iView)
// Vue.use(ElementUI)

require('../mock/index') //引入mock数据，关闭则注释该行

Vue.prototype.$http = http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // vuex,
  components: { App },
  template: '<App/>'
})
