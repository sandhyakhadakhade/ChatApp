<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <form class="ui form" @submit.prevent="onSubmit" @click="addtoAPI">
      <div class="field" :class="{error: errors.has('email')}">
        <label>please enter your email address</label><br>
        <input
          type="email"
          name="email"
          placeholder="Email"
          v-validate="'required|email'"
          v-model="User.Email"
        >
        <div class="error" v-if="errors.has('email')">{{errors.first('email')}}</div>
      </div>
       <br>
      <button type="submit" class="ui submit button">Submit</button>
      <br>
      <!-- <router-link to="/resetpassword">resetPassword</router-link> -->
      <!-- <router-link to="/resetpassword" tag="button">ResetPassword</router-link>  -->

    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
export default {
  name: "login",
  data() {
    return {
      title: "ForgotPassword",
      User:{
      Email: "",
    
      }
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("submit");
        }
      });
    },
    addtoAPI() {
      let newUser = {
         Email: this.User.Email,
       
      };
      console.log(newUser);
      axios
        .post('http://localhost:3000/verifyUser', newUser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
/* h1{
  color:blue
} */
/* label{
  font-weight:bold;
  text-align:center; 
} */

div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
 button{
 background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 42px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
        }
h1 {
  text-align: left;
  color:black;
}
label{
  font-weight:bold;
  text-align:center; 

}
form {  
  background-color: lightgrey;
  width: 500px;
  /* border: 25px solid steelblue; */
  padding: 25px;
  margin: 25px;
}
</style>