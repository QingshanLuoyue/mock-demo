import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 开发环境使用，生产环境注释
import '@/mock'

new Vue({
  render: h => h(App),
}).$mount('#app')
