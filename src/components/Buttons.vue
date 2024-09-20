<template>
  <button @click="emit('handleClick', 'Red button clicked')">Red</button>
  <button @click="emit('handleClick', 'Green button clicked')">Green</button>
  <button @click="emit('handleClick', 'Blue button clicked')">Blue</button>
</template>

<script setup>
const emit = defineEmits(["handleClick"]);
</script>
