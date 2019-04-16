import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VeeValidate from 'vee-validate';

import axios from 'axios'
import VueAxios from 'vue-axios'
 
//access throught the project
window.axios=axios;
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(VeeValidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
