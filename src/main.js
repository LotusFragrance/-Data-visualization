import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './less/main.less'
import '@/assets/fonts/icomoon.css'
import * as echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
