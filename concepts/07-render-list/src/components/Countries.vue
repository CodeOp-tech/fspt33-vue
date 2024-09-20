<template>
  <div>
    <h2>Countries</h2>

    <ul>
      <li v-for="country in countries">{{ country }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  countries: {
    type: Array,
    required: true,
  },
});
</script>
