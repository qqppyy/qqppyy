import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'assets/style/reset.css'

import router from 'router'
import './fw'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
