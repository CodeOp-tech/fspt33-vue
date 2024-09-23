<script setup>
import EmployeeCard from "./EmployeeCard.vue";
import Alert from "./Alert.vue";

const props = defineProps({
  employees: {
    type: Array,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Alert v-if="employees.length === 0" :message="message" />
  <EmployeeCard v-else />
</template>
