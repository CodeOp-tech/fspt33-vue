<script setup>
import { ref } from "vue";
import Buttons from "./components/Buttons.vue";

const message = ref("No button clicked!!");

const renderMessage = (value) => {
  // change the value of message
  message.value = value;
};
</script>

<template>
  <Buttons @handle-click="renderMessage" />
  <h1>{{ message }}</h1>
</template>

<style scoped>
body {
  margin: 0px;
}
</style>
