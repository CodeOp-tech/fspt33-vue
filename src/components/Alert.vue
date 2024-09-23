<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="alert alert-warning" role="alert">
    {{ message }}
  </div>
</template>
