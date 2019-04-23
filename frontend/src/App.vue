<template>
  <div id="app">
    
    <!-- <marquee>Welcome to ChatApp</marquee> -->
<!-- 
    <img
      src="https://img.icons8.com/dotty/80/000000/communication.png"
      width="200"
      height="200"
      align="right"
    > -->

    <!-- <h2>ChatApp</h2> -->
    <div id="nav" align = left>
      <router-link to="/">Home</router-link>
            <!-- <router-link to="/chat">Chat</router-link> -->
      <!-- <router-link to="/register" tag="button">Create New Account</router-link> -->
      <!-- <router-link to="/login" tag="button">Login</router-link> -->
      <!-- <router-link to="/forgotpassword" tag="button">ForgotPassword</router-link> -->
      <!-- <router-link to="/resetpassword/:token" tag="button">ResetPassword</router-link>  -->
    </div>
    <router-view/>
  </div>
</template>



<style lang="scss">
 @import './assets/app.css';
</style>
