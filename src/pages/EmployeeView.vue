<script setup>
import Banner from "../components/Banner.vue";
import EmployeesList from "../components/EmployeesList.vue";

const props = defineProps({
  employees: {
    type: Array,
  },
});
</script>

<template>
  <section class="container">
    <Banner title="Employee Portal" sub-title="Update employee details" />

    <EmployeesList :employees="employees" message="No employees to view" />
  </section>
</template>
