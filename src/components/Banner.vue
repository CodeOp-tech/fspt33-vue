<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="banner">
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
  </section>
</template>

<style scoped>
.banner {
  text-align: center;
  padding: 2rem 1rem;
  margin-bottom: 20px;
  background-color: #e9c46a;
}
</style>
