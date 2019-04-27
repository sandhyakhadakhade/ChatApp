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
              @keyup.enter="clickButton"
              id="chatinput"
            >
          </div>
          <div class="column is-2">
            <button class="button is-success is-fullwidth" @click="clickButton()">send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
         <script src="http://yourwebsite.com:12345/socket.io/socket.io.js"></script>
<script>

export default {
  name:"chat",
  data(){
    return {

    }
  },
   sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    methods: {
        clickButton: function (data) {
            // $socket is socket.io-client instance
            this.$socket.emit('newmsg', data)
        }
    }
}
</script>

<style scoped>
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