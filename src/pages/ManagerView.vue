<script setup>
import Banner from "../components/Banner.vue";
import AddEmployeeForm from "../components/AddEmployeeForm.vue";
import EmployeesList from "../components/EmployeesList.vue";
</script>

<template>
  <Banner title="Manager Portal" sub-title="Add and view employees" />

  <AddEmployeeForm />

  <EmployeesList />
</template>
