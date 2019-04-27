<template>
  <div id="app">
    <div position="static" align="center">
       <div align="center">
        <span style="font-weight:bold; font-size: 30px">Welcome TO ChatApp..!!!</span>
      </div>
    </div>
    <div align="right">
      <Button class="grow" color="inherit" align="right" v-on:click="logout()">Logout</Button>
    </div>
    <div align="left">
      <router-link to="/AllUsers" tag="button">AllUsers</router-link>
    </div>
    <form class="ui form">
      <div align="left">
        <span style="font-weight:bold">OnlineUsers</span>
      </div>
      <tr v-for="user_alias in User">
        <a
          style="cursor: pointer; margin-right: 150px;"
          v-on:click="navigateToMessage(user_alias)"
        >{{"⬤ "+user_alias.name}}</a>
      </tr>
    </form>
  </div>
</template>
  <script>
var socket = null;
import router from "../router";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      User: []
    };
  },
  methods: {
     navigateToLogin(){
       this.$router.push({ path: '/login' })
    },
    navigateToMessage(user) {
      // console.log(user.name);
      localStorage.setItem("reciverId", user.userid);
      localStorage.setItem("name", user.name);
      router.push({ name: "messages" });
    },
      logout() {
    localStorage.removeItem('token');
    this.navigateToLogin();
  },
    mounted() {
      axios
        .get("http://localhost:3000/getAllUsers")

        .then(response => {
          //  console.log(response.data.userid);
          this.User = response.data;
          localStorage.setItem("reciverId", response.data.userid); //response.data.result.userid
          return response;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.mounted();
  },
  scrollToTop() {
    window.scrollTo(0, 0);
  },


};
</script>

<style lang="scss">
  @import'/home/admin1/JavaScript/ChatApllication/frontend/src/assets/main.scss'
</style>

