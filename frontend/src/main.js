import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store.js'
import VeeValidate from 'vee-validate';

import axios from 'axios'
import VueAxios from 'vue-axios'

// Require the main Sass manifest file
require('./assets/main.scss');

Vue.config.productionTip = false;

//setting scocket
// import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://localhost:3000');

// Vue.use(VueSocketIO, SocketInstance);


 
//access throught the project
// window.axios=axios;
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;
Vue.use(VeeValidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
