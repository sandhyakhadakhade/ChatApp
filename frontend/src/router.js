import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home.vue'

import registration from './components/registration.vue';
import login from './components/login.vue';
import ForgotPass from './components/ForgotPass.vue';
import ResetPass from './components/ResetPass.vue';
import AllUsers from './components/AllUsers.vue';
import Chat from './components/Chat.vue';
import messages from './components/messages.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
     
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component:registration
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPass
    },
    {
      path: '/resetpassword/:token',
      name: 'resetsetpassword',
      component: ResetPass
     },
     {
       path:'/AllUsers',
       name:'AllUsers',
       component:AllUsers,
     },
     {
       path:'/messages',
       name:'messages',
       component:messages
     }
   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  mode:'history'
})
