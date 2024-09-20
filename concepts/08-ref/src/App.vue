<script setup>
import { ref } from "vue";

const message = ref("No button clicked");

const handleRedBtnClick = () => {
  // change message value
  message.value = "Red button clicked";
};

const handleGreenBtnClick = () => {
  // change message value
  message.value = "Green button clicked";
};

const handleBlueBtnClick = () => {
  // change message value
  message.value = "Blue button clicked";
};
</script>

<template>
  <button @click="handleRedBtnClick">Red</button>
  <button @click="handleGreenBtnClick">Green</button>
  <button @click="handleBlueBtnClick">Blue</button>
  <h1>{{ message }}</h1>
</template>

<style scoped>
body {
  margin: 0px;
}
</style>
