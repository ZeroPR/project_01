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
import {formatMoney} from 'accounting'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueSession)

Vue.filter('currency', (val) => {
  return formatMoney(val)
})

Vue.filter('fecha', (val) => {
  return new moment(val).format('DD[/]MM[/]YYYY')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
