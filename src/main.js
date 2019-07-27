import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import './assets/project.css'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')