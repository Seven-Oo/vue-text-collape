import Vue from 'vue'
import App from './App.vue'
import '../src/assets/font/iconfont.css'
import Collape from './lib/collape.js'

Vue.use(Collape)

new Vue({
  el: '#app',
  render: h => h(App)
})
