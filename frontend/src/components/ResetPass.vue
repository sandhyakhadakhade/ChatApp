<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <form class="ui form" @submit.prevent="onSubmit" @click="addtoAPI">
      <div>
        <label>Password&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
        <input
          v-validate="'required'"
          name="password"
          type="password"
          :class="{'is-danger': errors.has('password')}"
          placeholder="Password"
          v-model="User.Password"
          ref="password"
        >
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
        <br>
        <label>confirmPassword&ensp;</label>
        <input
          v-validate="'required|confirmed:password'"
          name="password_confirmation"
          type="password"
          :class="{'is-danger': errors.has('password_confirmation')}"
          placeholder="Password, Again"
          data-vv-as="password"
        >
        <span
          v-show="errors.has('password_confirmation')"
          class="help is-danger"
        >{{ errors.first('password_confirmation') }}</span>
      </div>
      <button type="submit" class="ui submit button"  >Submit</button>
      <!-- <button @onclick="submit()">Submit</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VeeValidate from "vee-validate";
import userServices from "../services/userServices";
Vue.use(VeeValidate);
export default {
  name: "registration",
  data() {
    return {
      title: "Reset Password",
      User: {   Password: "", confirmPassword: "" }
    };
  },
  // async created(){
  //   try{
  //     this.posts = await userServices.;
  //   }catch(err){
  //     this.error=err.message;

  //   }
  // },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Your password has been successful reset, you can now login with your new password");
        }
      });
    },
    addtoAPI() {
      let newUser = {
       Password: this.User.Password,
       confirmPassword: this.User.confirmPassword
      };
      console.log(newUser);
      axios
        .post("http://localhost:3000/resetpassword/:token", newUser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
//http://localhost:3000/registration
</script>

<style scoped>
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