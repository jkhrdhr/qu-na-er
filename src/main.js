import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import MintUi from 'mint-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/index.css'

Vue.use(VueAxios, Axios)
Vue.use(MintUi)
FastClick.attach(document.body)
Vue.config.productionTip = false
Axios.defaults.baseURL = '/api'
new Vue({
      router,
      store,
      render: h => h(App)
}).$mount('#app')
