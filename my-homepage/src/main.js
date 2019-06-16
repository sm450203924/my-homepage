import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

import ElementUI from 'element-ui'
import './assets/css/theme.scss'
import '../node_modules/normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
