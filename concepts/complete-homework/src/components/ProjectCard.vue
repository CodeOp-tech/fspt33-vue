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

const emit = defineEmits(["showCurrentProject"]);
</script>

<template>
  <div class="project-card">
    <img
      :src="image"
      :alt="title"
      class="project-img"
      @click="
        emit('showCurrentProject', {
          title,
          image,
          description,
        })
      "
    />
  </div>
</template>

<style scoped>
.project-card {
  width: 200px;
}

.project-img {
  object-fit: contain;
  width: 100%;
}
</style>
