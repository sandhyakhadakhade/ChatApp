import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// import router from './router'

import Home from './components/Home.vue';
import registration from './components/registration.vue';
import login from './components/login.vue';
import ForgotPass from './components/ForgotPass.vue';
import ResetPass from './components/ResetPass.vue';

// import VueRouter from 'vue-router';

Vue.use(VueResource);

// Vue.use(VueRouter);


const router = new VueRouter( {
  routes : [
    {path:'/',component : Home},
    {path:'/register',component : registration},
    {path:'/login',component : login},
    {path:'/forgot',component : ForgotPass},
    {path:'/rset',component : ResetPass},
    {
      path:'/chat',
      name: 'chat',
      component:chatDemo
    }
    
  ]
  
  });

new Vue({
  e1:'app',
  router,
  render: h => h(App)
}).$mount('#app')
