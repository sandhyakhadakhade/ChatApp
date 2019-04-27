<template>
  <div>
    <marquee>Welcome to ChatApp</marquee>
    <h1>HomePage</h1>
    <router-link to="/login">Login</router-link>|
    <router-link to="/register">Create New Account</router-link>
    <br>
    <div align="center">
      <img src="https://img.icons8.com/dotty/80/000000/communication.png" width="200" height="200">
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  return: {}
};
</script>
<style >
body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: black;
  padding: 15px;
  font-size: larger;
  font-style: italic;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
marquee {
  background-color: linen;
}
/* #background {
      background: url("https://wallimpex.com/data/out/348/website-backgrounds-hd-7236182.jpg");
    } */
</style>
