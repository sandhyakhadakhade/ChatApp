<template>
  <div id="app">
    <marquee>Welcome to ChatApp</marquee>

    <img
      src="https://img.icons8.com/dotty/80/000000/communication.png"
      width="200"
      height="200"
      align="right"
    >

    <!-- <h2>ChatApp</h2> -->
    <div id="nav">
      <!-- <router-link to="/" tag="button">Home</router-link>| -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <router-link to="/foo" tag="button">foo</router-link> -->
      <router-link to="/register" tag="button">Create New Account</router-link>
      <router-link to="/login" tag="button">Login</router-link>
      <router-link to="/forgotpassword" tag="button">ForgotPassword</router-link>
      <router-link to="/resetpassword" tag="button">ResetPassword</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
h2 {
  font-weight: bold;
  text-align: left;
  color: blue;
  background-size: 300px 100px;
}
body{
  background-color:cadetblue;
font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: black;
  padding: 10px;
  font-size: larger;
  font-style: italic;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
marquee {
  background-color: linen;
  color: black
}
button {
  background-color: blue;
  padding: 10px 42px;
  color: black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
