import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './less/main.less'
import '@/assets/fonts/icomoon.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
