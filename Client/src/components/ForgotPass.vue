<template>
<body>
  <div>
    <table align = "center">
      <p> ForgotPassword</p>
    <div align="center">
      <p class="form_name">
        Email
        <input
          type="email"
          class="form-control"
          placeholder="Email Address"
          v-model="email"
          required
        >
        <span v-show="email"></span>
      </p>
      <br>
      <div align="center">
        <button >
      <router-link to="/rset">Forgot</router-link> 
        </button>
      </div>
      <!-- <div class="container" style="background-color:aqua"> -->
<div align = left> 
      <button
        type="button"
        onclick="document.getElementById('id01').style.display='none'"
        class="cancelbtn"
      >Cancel</button></div>
      <div align = right>
        <router-link to="/login">Login</router-link> 
          <!-- <a href="/home/admin1/JavaScript/ChatApp/chatapp/src/components/login.html">Login</a> -->
      </div>
     
    </div>
    
    </table>
  </div>
  
</body>
</template>

<script>
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
</script>


<style scoped>
/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
#form_name {
  padding: 25px 0 0 15px;
  color: black;
  font-weight: normal;
  text-align: left;
}

/* Set a style for all buttons */


/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
button {
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
.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
 table {
   width: 40%;
   height: 40%;
      background-color:lightblue;
  border: 1px solid black;
  text-align: center;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
  padding-top: 60px;
}
/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 50%;
  /* Could be more or less, depending on screen size */
}
.close:hover,
.close:focus {
  color: chartreuse;
  cursor: pointer;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }

  .cancelbtn {
    width: 100%;
  }
}
</style>

