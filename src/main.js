import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor' // 适配器，将原生api转为promise形式，方便异步编程
import store from '@/store'

Vue.config.productionTip = false // 阻止启动生产消息

App.mpType = 'app' // 当前运行的是原生小程序

const app = new Vue({
  store,
  ...App
})
app.$mount()
