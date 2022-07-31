<template>
  <div class="home">
    <textarea
      v-on:keydown.enter="sendMessage"
      v-model="message"
      cols="30"
      rows="10"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import io from "socket.io-client";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      message: "",
      socketInstance: io("http://localhost:5050/room"),
    };
  },

  methods: {
    sendMessage() {
      this.socketInstance.emit("send-message", {
        message: this.message,
      });
      this.message = "";
    },
  },

  created() {
    this.socketInstance.emit("join", { name: "Rafael", room_id: "1" });
    this.socketInstance.on("receive-message", (data) => {
      console.log(data);
    });
  },
});
</script>
