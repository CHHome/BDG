// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
import $ from 'jquery'
window.$ = $;
import 'bootstrap-webpack'
import 'font-awesome-webpack'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'
import 'admin-lte/dist/js/app.min'
import '@/css/normalize.css'
import 'jquery-serializejson'//序列化表单


Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    dialog:false
  },
  mutations: {
    showDialog(state) {
      state.dialog = true
    },
    unShowDialog(state){
      state.dialog = false;
    }
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
