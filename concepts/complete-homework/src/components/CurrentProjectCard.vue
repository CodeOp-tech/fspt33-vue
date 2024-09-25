<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="project-card">
    <h3>{{ title }}</h3>
    <img :src="image" :alt="title" class="project-img" />
    <p>{{ description }}</p>
  </section>
</template>

<style scoped>
.project-card {
  width: 500px;
}

.project-img {
  object-fit: contain;
  width: 100%;
}
</style>
