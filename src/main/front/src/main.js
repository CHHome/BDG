// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import $ from 'jquery'
window.$ = $;
import 'bootstrap-webpack'
import 'font-awesome-webpack'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'
import 'admin-lte/dist/js/app.min'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
