<template>
  <ul class="users">
    <user v-for:="item in userList" v-bind:user="item"  />
  </ul>
</template>

<script>
  import User from './User';

  export default {
    name: 'UserList',
    props: ['users'],
    computed: {
      userList() {
        return Object.keys(this.users).map(user => this.users[user]);
      },
    },
    components: {
      User,
    },
  };
</script>

<style scoped>
  .users {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
</style>
























<template>
  <div id="app">
    <AppBar position="static" align="center">
        <h1>Welcome TO ChatApp..!!!</h1>
      </AppBar>
    <div align="left">
      <router-link to="/AllUsers" tag="button">AllUsers</router-link>
      <!-- <input type="submit" value="AllUsers"/>-->
    </div>
    <div align="right">
      <Button class="grow" color="inherit" align="right" onClick="{this.handleLogout}">Logout</Button>
    </div>
    <div>
    </div>
    <ul id="chatbox">
      <li v-for:="Message in messages">{{message}}</li>
    </ul>
    <from @submit.prevent="sendMessage">
      <input type="text" placeholder="Message.." v-model:value:="message">
      <input type="submit" value="Send">
    </from>
  </div>
</template>
  <script src="/socket.io/socket.io.js"></script>
  <script>
var socket = null;
export default {
  // State 0: select username
  // State 1: chat application
  name: "app",
  data() {
    return {
      messages: [],
      message: "",
      username: "",
      state: 0
    };
  },
  methods: {
    sendMessage: function() {
      socket.emit("message", this.message);
      this.message = "";
    },
    setUsername: function() {
      socket.emit("join", this.username);
      this.username = "";
      this.state = 1;
    },
    continueWithoutUsername: function() {
      socket.emit("join", null);
      this.state = 1;
    }
  },
  created: function() {
    socket = io();
  },
  mounted: function() {
    socket.on("message", function(message) {
      app.messages.push(message);
      // this needs to be done AFTER vue updates the page!!
      app.$nextTick(function() {
        var messageBox = document.getElementById("chatbox");
        messageBox.scrollTop = messageBox.scrollHeight;
      });
    });
  }
};
</script>
