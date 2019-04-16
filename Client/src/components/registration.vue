<template>
  <div class="hello">
    <div @submit.prevent="submit">
      <!-- <marquee>Welcome to ChatApp</marquee> -->
    </div>
    <center>
      <table>
        <div>
          <h2 class="form_title">Create New Account</h2>
        </div>
        <div>
          <h2 class="form_name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="User Name"
              v-model="name"
              required
            >
            <span v-show="name">required</span>
          </h2>
        </div>

        <h2 class="form_name">
          Email
          <input
            type="email"
            class="form-control"
            placeholder="Email Address"
            v-model="email"
            required
          >
          <span v-show="email">required</span>
        </h2>

        <h2 class="form_name">
          Password
          <input
            v-validate="'required'"
            name="password"
            type="password"
            placeholder="Password"
            ref="password"
          >
        </h2>

        <h2 class="form_name">
          Confirm Password
          <input
            v-validate="'required|confirmed:password'"
            name="password_confirmation"
            type="password"
            placeholder="Password, Again"
            data-vv-as="password"
          >
        </h2>
        <!-- <div align = center>
        <button class="button">Register</button>
        </div>-->
        <div align="center">
          <button type="submit" class="button">Submit</button>
        </div>
        <br>
        <div align="center">
          <router-link to="/login">Login</router-link>
          <!-- <a href="/home/admin1/JavaScript/ChatApp/chatapp/src/components/login.html">Login</a> -->
        </div>
        <button v-on:click.prevent="post">Add Blog</button>
        <br>
      </table>
    </center>
  </div>
</template>
<script>
// import passwordValidation from '../components/passwordValidation.vue';     <passwordValidation/>  passwordValidation
export default {
  name: "app",
  components: {},
  data() {
    return {
      title:"",
      errors: [],
      name: null,
      email: ""
    };
  },
  methods: {
    checkForm(e) {
      if (this.name) {
        return true;
      }
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name requirded");
      }
      e.preventDefault();
    }
  },
  submit() {
    this.$v.form.$touch();
    if (this.$v.form.$error) return;
    // to form submit after this
    alert("Form submitted");
  },
  post:function(){
    this.$http.post('https://jsonplaceholder.typicode.com/posts',{
      title:this.blog.title,
      name:this.blog.name
    }).then(function(data){
      console.log(data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container_body {
  padding: 20px;
}
.form_title {
  font-size: 35px;
  font-weight: bold;
  color: darkblue;
  text-align: center;
  padding: 10px;
}
.head_para {
  font-size: 19px;
  color: #99a2a7;
  text-align: center;
  font-weight: normal;
}
.button {
  background-color: green;
  border: none;
  color: white;
  padding: 5px 32px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
#form_name {
  padding: 25px 0 0 15px;
  font-weight: 300;
  color: black;
  font-weight: normal;
  text-align: left;
}

table {
  border: 1px solid black;
}
#name {
  margin-right: 20px;
}
marquee {
  /* background-color: blueviolet; */
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: black;
  padding: 10px;
  font-size: larger;
  font-style: italic;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.box {
  width: 25vw;
  padding: 1em;
  perspective: 600px;
  position: relative;
}
h3 {
  margin: 40px 0 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;
  text-align: left;
  font-weight: bold;
}
body {
  background-color: lightgrey;
  width: 300px;
  border: 25px solid green;
  padding: 25px;
  margin: 25px;
}
</style>
