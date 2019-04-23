<template>
  <div id="app">
    <div id="nav">
     <body>
     <marquee>Welcome to ChatApp</marquee>
   <h1>HomePage</h1>
             <!-- <router-link to="/login">Login</router-link> |   -->
         <!-- <router-link to="/register">Create New Account</router-link> <br> -->
        
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/forgot">forgotPass</router-link>|
      <router-link to="/rset">ResetPassword</router-link>
       <router-link to="/chat">ChatApp</router-link>|
        <div align = center>
   <img src="https://img.icons8.com/dotty/80/000000/communication.png" width="200" height="200">
         </div>
   </body>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
