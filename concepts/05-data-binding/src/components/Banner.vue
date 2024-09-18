<template>
  <section class="banner">
    <h1 class="title">{{ title }}</h1>
    <h2 class="sub-title">{{ subTitle }}</h2>
  </section>
</template>

<style scoped>
.title {
  color: #41b883;
}

.sub-title {
  color: #34495e;
}

.banner {
  padding: 32px;
  text-align: center;
}
</style>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
});
</script>
