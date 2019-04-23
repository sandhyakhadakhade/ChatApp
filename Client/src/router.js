import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home.vue';
import registration from './components/registration.vue';
import login from './components/login.vue';
import ForgotPass from './components/ForgotPass.vue';
import ResetPass from './components/ResetPass.vue';
import chatDemo from './components/chatDemo.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home', // any name to class bt main js and router js name should be same
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component:registration
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForgotPass
    },
    {
      path: '/rset',
      name: 'rset',
      component: ResetPass
    },
    {
      path:'/chat',
      name: 'chat',
      component:chatDemo
    }
   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
new Vue({
  e1:'app',
  router,
  render: h => h(App)
}).$mount('#app')
