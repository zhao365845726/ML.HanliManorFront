// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/main.css'
import './assets/css/swiper.min.css'
import 'vue-paginate'
import VueSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import paginate from 'vue-paginate'


Vue.use(paginate)
Vue.use(VueSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
