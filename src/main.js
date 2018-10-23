import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import theme from './theme'
Vue.config.productionTip = false

Vue.use(VueSession)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
