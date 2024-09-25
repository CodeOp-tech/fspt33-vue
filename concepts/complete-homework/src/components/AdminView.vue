<script setup>
import { ref } from "vue";

const emit = defineEmits(["createProject"]);

const title = ref("");
const image = ref("");
const description = ref("");

const handleSubmit = () => {
  // get values from state and build project object
  const project = {
    title: title.value,
    image: image.value,
    description: description.value,
  };

  // emit createProject
  emit("createProject", project);

  // clear form values
  title.value = "";
  image.value = "";
  description.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    Title
    <input v-model="title" />
    Image
    <input v-model="image" />
    Description
    <input v-model="description" />
    <button type="submit">SUBMIT</button>
  </form>
</template>

<style></style>
