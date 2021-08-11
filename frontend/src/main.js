import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from './axios'
import titleMixin from './mixins/titleMixin'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.mixin(titleMixin)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
