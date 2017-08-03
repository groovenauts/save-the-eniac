import Vue from 'vue'
import VueLogger from 'vuejs-logger'
import store from './vuex/store'
import App from './App'
import './assets/img/favicon.ico'

const options = {
  logLevel : 'debug',
  // optional : defaults to false if not specified 
  stringifyArguments : false,
  // optional : defaults to false if not specified 
  showLogLevel : false
}
Vue.use(VueLogger, options)
Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
