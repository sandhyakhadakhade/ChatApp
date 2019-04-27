<template>
  <div id="app">
    <div position="static" align="center">
        <h1>Welcome TO ChatApp..!!!</h1>
    </div>
    <div align="left">
      <router-link to="/AllUsers" tag="button">AllUsers</router-link>
      <!-- <input type="submit" value="AllUsers"/>-->
     <!-- <a v-bind:href="'/AllUsers/'">all</a> -->
     <!-- <a [routerLink]="[{ outlets: { primary: 'AllUsers', aside: null }}]"> AllUsers</a> -->
    </div>
    <div align="right">
      <Button class="grow" color="inherit" align="right" onClick="{this.logout}">Logout</Button>
    </div>
   <!-- <router-link to="/messages">messages</router-link> -->
   <!-- <router-link @click.native="$scrollToTop"> -->
        <!-- <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">go to All USers page</a> -->


  </div>
</template>
  <script>
  import router from '../router';
var socket = null;
export default {
  // State 0: select username
  // State 1: chat application
  name: "app",
  data() {
    return {
    }
  },
  method:{
      // navigate() {
      //           router.push({ name: "AllUsers" });
      //       },
    scrollToTop(){
      window.scrollTo(0,0);
    },
    
  logout() {
    axios.post('logout')
    .then(function(){
      location.reload();
    })
    .catch(error =>{
      this.errors.push(error);
    })
  },
  }
}
</script>