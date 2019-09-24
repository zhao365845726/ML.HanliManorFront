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
import Pagination from 'vue-pagination-2'
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import AMap from 'vue-amap'
import VueLazyload from 'vue-lazyload'
//import jQuery from 'jquery'

//Vue.use(jQuery)
Vue.use(VueLazyload)
Vue.use(AMap)
//Vue.use(VueI18n)
Vue.component('date', myDatepicker)
Vue.component('pagination', Pagination)
Vue.use(VueSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.config.productionTip = false
AMap.initAMapApiLoader({
  key: 'e1dedc6bdd765d46693986ff7ff969f4',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    "AMap.Geolocation" 
  ]
})
//Vue.use(jQuery, {
//  plugins: [
//    new webpack.ProvidePlugin({
//      $: 'jquery',
//      jQuery: 'jquery'
//    }),
//  ]
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    document.onselectstart = new Function("return false");
  }
})
//Vue.use(VueLazyload, {
//  preLoad: 1.3,
//  error: 'dist/error.png',
//  loading: 'dist/loading.gif',
//  attempt: 1
//})
//import VueI18n from 'vue-i18n';
//Vue.use(VueI18n);
//const i18n = new VueI18n({
//  locale: localStorage.getItem('language') || 'cn', //使用localStorage缓存到本地，当下次使用时可默认当前使用语言
//  messages: {
//    'cn': require('./i18n/lang/cn'),
//    'en': require('./i18n/lang/en')
    
//  }
//})
//new Vue({ 
//  el: '#app',
//  router,
//  i18n,
//  template: '<App/>',
//  components: { App }
//})
