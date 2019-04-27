<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <form class="ui form" @submit.prevent="onSubmit" @click="addtoAPI">
      <div class="field" :class="{error: errors.has('Email')}">
        <label>Email&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          v-validate="'required|email'"
          v-model="User.Email"
        >
        <div class="error" v-if="errors.has('email')">{{errors.first('email')}}</div>
      </div>
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
      </div>
        <br>
              <router-link to="/forgotpassword">ForgotPassword</router-link>|
            <!-- <router-link to="/chat">Chat</router-link> -->

      <router-link to="/register">registration</router-link>

      <button type="submit" class="ui submit button">Login</button>

    </form>
  </div>
</template>

<script>
import router from '/home/admin1/JavaScript/ChatApllication/frontend/src/components/Chat.vue';
import axios from "axios";
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
export default {
  name: "registration",
  data() {
    return {
      title: "Login for ChatApp",
      User: { Email: "", Password: ""}
    };
  },
  
  methods: {
    navigate(){
       this.$router.push({ path: '/chat' })
    },
    onSubmit() {
      this.$validator.validateAll().then(response => {
        if (response) {
          if(this.navigate()){
            alert("login successfully");
          }
        }
      });
    },
    addtoAPI() {
      let newUser = {
        Email: this.User.Email,
        Password: this.User.Password
      };
      console.log(newUser);
      axios
        .post("http://localhost:3000/login", newUser)
        .then(response => {
          // console.log("Data************",response.data.result);
          localStorage.setItem("userid",response.data.result.userid);
          localStorage.setItem("token",response.data.result.token)
          return response
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          return error
        });
    }
  }
};
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
  color: black;
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