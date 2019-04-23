<template>
  <div class="container">
    <!-- <h1>Hi</h1> -->
    <table class = "table table= striped table-borders">
      <thead>
        <tr>
          <!-- <th>First Name</th> -->
        </tr>
      </thead>
      <tbody>
        <!-- <div v-for="r in rentals">
  <a bind-href="'/job/'r.id"> {{ r.job_title }} </a>
</div>   -->
        <tr v-for="user_alias in User">
          <!-- <td>{{user_alias.FirstName}}</td> -->
          <a bind-href="'/messages/'" >
             <router-link to="/messages">{{`☻  ${user_alias.name}`}}</router-link>
        </a>

        </tr>
      </tbody>
    <!-- <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Back</a> -->

    </table>
  </div>
</template>
<script>
import router from '/home/admin1/JavaScript/ChatApllication/frontend/src/components/Chat.vue';
import axios from 'axios';
export default {
  name : "user",
  data(){
    return{
      User:[],
    }
  },
   navigate() {
        // router.go(-1);
               this.$router.push({ path: '/chat' })

    },
  mounted() {
 axios.get('http://localhost:3000/getAllUsers')
 .then((response)=>{
  //  console.log(response.data.userid);
 localStorage.setItem("userid",response.data.userid);
   this.User = response.data;
 })
 .catch((error)=>{
   console.log(error);
   
 });
  }
}
</script>
<style>

</style>
