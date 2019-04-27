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
        <h2 class="title is-2">{{name1}}</h2>
        <div class="messages">
          <div v-for="m in msgs">
            <div class="chat" :class="{'chat-u' : m.type == 'u', 'chat-f': m.type=='f'}">{{m.msg}}</div>
            <div class="clr"></div>
            <div>{{m.reciver}}</div>
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
              placeholder="type a message"
              @keyup.enter="sendMsg"
              id="chatinput"
            >
          </div>
          <div class="column is-2">
            <button class="button is-success is-fullwidth" @click="sendMsg">send</button><br>
          </div>
        
          <button @click="clearAllMessages">Clear All</button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script src="http://yourwebsite.com:12345/socket.io/socket.io.js"></script>
<script>
import io from "socket.io-client";
// const io = (window.io = require("socket.io-client"));
var socket = io.connect("http://localhost:3000");
const Sender = localStorage.getItem("userid");
console.log("Sender is :", Sender);
const reciver = localStorage.getItem("reciverId");
console.log("Selected reciver is: ", reciver);
const name = localStorage.getItem("name");
console.log("UserName",name);
export default {
  name: "chat",
  data() {
    return {
      messageVal: "",
      msgs: [],
      reciver: "",
      sender: "",
      name1:""
      // socket: io("localhost:3000")
    };
  },
  methods: {
     clearAllMessages() {
      this.msgs = []
    },
    sendSocketMsg(msg) {
      // msg.preventDefault()
      socket.emit("newmsg", {
        message: msg,
        uid: socket.sessionid,
        senderId: Sender,
        reciverId: reciver
      });
    },
    updateScroll() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    mounted() {
      console.log("Mounted");
     this.setData();
    },
    setData(){
      socket.on("MESSAGE", data => {
        this.msgs = [...this.msgs, data];
        // this.msgs.push(data);
      });
    },
    sendMsg() {
      this.name1 = name
      this.sendSocketMsg(this.messageVal);
      this.msgs.push({
        type: "u",
        msg: this.messageVal
      });
      this.messageVal = "";
    },
    updated() {
      console.log("Updated");
      this.updateScroll();
    }
  }
};
/**
    sendSocketMsg(msg) {
      socket.emit("newmsg", {
        message: msg,
        uid: socket.sessionid,
        senderId: Sender,
        reciverId: reciver
      });
    },
    sendMsg() {
      this.sendSocketMsg(this.messageVal);
      this.msgs.push({
        type: "u",
        msg: this.messageVal
      });
      this.messageVal = "";
      // console.log("Push data",this.msgs)
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
       this.socket.on("Message", function(data) {
         this.sendExplicitMsg(mytype,data);
        // console.log("f", data);
        // // this.msgs.push(data)
        // this.msgs =  [...this.msgs, data];
        // console.log("msg data",this.msgs);
      });
    console.log("Mounted");
    //this.sendMsg();
  },
beforeMount(){
   
 },
  updated() {
    console.log("Updated");
    this.updateScroll();
  }
}; */
</script>
<style scoped>
.chat-area {
/*   border: 1px solid #ccc; */
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 350px;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3)
}
.page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mycontainer {
  background-image: url("http://thehypebr.com/wp-content/uploads/2010/09/boundless-sem-branco-2.jpg");
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
  /* margin-top: -4px; */
  /* margin-right: -4px; */
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
 /* .text-part {
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  background: rgb(238, 238, 238);
  left: 0;
  margin-top: 10px;
  width: 100%;
}  */
.text-part .columns {
  max-width: 400px;
  margin: 0 auto;
}

</style>