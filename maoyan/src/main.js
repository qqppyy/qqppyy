import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './utils/rem'
import './assets/global.styl'
import router from './router'

import  MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import Fw from './freamwork'


import { homeFilters } from './filters/index';

Vue.use( MintUI )
Vue.use( Fw )

for ( var key in homeFilters ) {
  Vue.filter( key, homeFilters[ key ] )
}
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
