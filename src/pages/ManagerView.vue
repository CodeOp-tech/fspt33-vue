<script setup>
import Banner from "../components/Banner.vue";
import AddEmployeeForm from "../components/AddEmployeeForm.vue";
import EmployeesList from "../components/EmployeesList.vue";

const props = defineProps({
  employees: {
    type: Array,
  },
});
</script>

<template>
  <section class="container">
    <Banner title="Manager Portal" sub-title="Add and view employees" />

    <AddEmployeeForm />

    <EmployeesList
      :employees="employees"
      message="No employees, please add employee"
    />
  </section>
</template>
