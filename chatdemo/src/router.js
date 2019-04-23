import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Chat from './components/Chat.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
