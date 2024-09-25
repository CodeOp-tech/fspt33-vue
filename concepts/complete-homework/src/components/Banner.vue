<script setup>
const props = defineProps({
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["navItemClick"]);
</script>

<template>
  <section>
    <h1>{{ isAdmin ? "Admin View" : "User View" }}</h1>
    <button
      @click="emit('navItemClick', true)"
      :class="{ 'my-button': true, 'focussed-button': isAdmin }"
    >
      ADMIN
    </button>
    <button
      @click="emit('navItemClick', false)"
      :class="{ 'my-button': true, 'focussed-button': !isAdmin }"
    >
      USER
    </button>
  </section>
</template>

<style scoped>
.my-button {
  background: none;
}

.focussed-button {
  background-color: red;
}
</style>
