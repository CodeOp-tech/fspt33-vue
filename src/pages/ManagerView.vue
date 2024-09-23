<script setup>
import Banner from "../components/Banner.vue";
import AddEmployeeForm from "../components/AddEmployeeForm.vue";
import EmployeesList from "../components/EmployeesList.vue";

const emit = defineEmits(["addEmployee"]);

const props = defineProps({
  employees: {
    type: Array,
  },
});

const handleFormSubmit = (formValues) => {
  // re-emit the event
  emit("addEmployee", formValues);
};
</script>

<template>
  <section class="container">
    <Banner title="Manager Portal" sub-title="Add and view employees" />

    <AddEmployeeForm @add-employee="handleFormSubmit" />

    <EmployeesList
      :employees="employees"
      message="No employees, please add employee"
    />
  </section>
</template>
