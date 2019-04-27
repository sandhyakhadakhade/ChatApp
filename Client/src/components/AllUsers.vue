<template>
  <div class="container">
    <form class="ui form">
      <h1 align = "left">OnlineUsers</h1>
          <tr v-for="user_alias in User">
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigateToMessage(user_alias)">{{"⬤     "+user_alias.name}}</a>
          </tr>
    </form>
  </div>
</template>
<script>
import router from "../router";
import axios from "axios";
export default {
  name: "user",
  data() {
    return {
      User: []
    };
  },
  methods: {
    navigateToMessage(user) {
      // console.log(user.name);
      localStorage.setItem("reciverId", user.userid);
      localStorage.setItem("name",user.name);
      router.push({ name: "messages" });
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
  beforeMount(){
    this.mounted()
 }
};
</script>

