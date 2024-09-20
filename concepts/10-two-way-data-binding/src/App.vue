<script setup>
import { ref } from "vue";

const fullName = ref("");
const emailAddress = ref("");

const handleClick = () => {
  // do something with fullName and emailAddress
  console.log(fullName.value);
  console.log(emailAddress.value);
};
</script>

<template>
  <input placeholder="Enter full name" v-model="fullName" />
  <input placeholder="Enter email address" v-model="emailAddress" />
  <button @click="handleClick">Register</button>
</template>

<style scoped>
body {
  margin: 0px;
}
</style>
