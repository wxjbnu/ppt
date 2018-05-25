// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import './components/global.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
import VueImpress from 'vue-impress'
import 'vue-impress/dist/vue-impress.css'

Vue.use(VueImpress)

Vue.config.productionTip = false
const unsync = sync(store, router)

router.beforeEach((to, from, next) => {
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
