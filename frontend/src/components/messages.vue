
<template>
  <div>
    <h1>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- <title>chat app</title> -->

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="css/main.css">
    </h1>

    <div id="app" class="container">
      <div class="mycontainer" ref="msgbigbox">
        <h2 class="title is-2">Chat App</h2>
        <div class="messages">
          <div v-for="m in msgs">
            <div class="chat" :class="{'chat-u' : m.type == 'u', 'chat-f': m.type=='f'}">{{m.msg}}</div>
            <div class="clr"></div>
          </div>
        </div>
      </div>
      <div class="text-part">
        <div class="columns is-mobile">
          <div class="column is-10">
            <input
              type="text"
              v-model="messageVal"
              class="input"
              @keyup.enter="sendMsg"
              id="chatinput"
            >
          </div>
          <div class="column is-2">
            <button class="button is-success is-fullwidth" @click="sendMsg">Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
         <script src="http://yourwebsite.com:12345/socket.io/socket.io.js"></script>
<script>
export default {
  name: "chat",
  data() {
    return {
      messageVal:"",
      msgs: [],
      reciver:'',
      sender:'',
    };
  },
  methods: {
    sendMsg() {
      sendSocketMsg(this.messageVal);
      this.msgs.push({
        type: "u",
        msg: this.messageVal,
       
      });
      this.messageVal = "";
    },
    sendExplicitMsg(mytype, mymsg) {
      this.msgs.push({
        type: mytype,
        msg: mymsg
      });
    },
    updateScroll() {
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
  mounted() {
    console.log("Mounted");
  },
  updated() {
    console.log("Updated");
    this.updateScroll();
  },
};
const io = (window.io = require("socket.io-client"));
var socket = io.connect("http://localhost:3000");
 const Sender = localStorage.getItem('userid');
        // this.userid.push({ Sender: userid })
  console.log('Sender is :', Sender);
  // console.log("Selected receiver: ", this.userid);
  const reciver = localStorage.getItem('this.userid');
socket.on("newmsg", function(data) {
  vm.sendExplicitMsg("f", data.msg);
});
function sendSocketMsg(msg) {
  
  socket.emit("newmsg", {
    message: msg,
    uid: socket.sessionid,
    senderId: Sender,
   recieverId: reciver
  });
}
</script>

<style scoped>
/* @import '/home/admin1/JavaScript/ChatApllication/frontend/src/assets/css/chat.css '; */
/* @import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"  */
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" /> */

.mycontainer {
    background-image:url('http://thehypebr.com/wp-content/uploads/2010/09/boundless-sem-branco-2.jpg');

  height: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 0 10px 0 10px 0 !important;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 100px;
}
.chat {
  position: relative;
  border-radius: 0.4em;
  padding: 10px;
  margin-top: 20px;
}
.chat-u {
  background: #00aabb;
  color: #fff;
  max-width: 80%;
  float: right;
}
.chat-f {
  background: #dddddd;
  max-width: 80%;
  float: left;
}
.chat-u:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-left-color: #00aabb;
  border-right: 0;
  margin-top: -4px;
  margin-right: -4px;
}

.chat-f:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-right-color: #dddddd;
  border-left: 0;
  margin-top: -4px;
  margin-left: -4px;
}
.clr {
  clear: both;
}
.text-part {
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  background: rgb(238, 238, 238);
  left: 0;
  margin-top: 10px;
  width: 100%;
}
.text-part .columns {
  max-width: 400px;
  margin: 0 auto;
}
.text-part input {
  /* width: 300px; */
  /* width:100%; */
}
</style>