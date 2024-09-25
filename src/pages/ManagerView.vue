<script setup>
import Banner from "../components/Banner.vue";
import AddEmployeeForm from "../components/AddEmployeeForm.vue";
import EmployeesList from "../components/EmployeesList.vue";
import EmployeeCard from "@/components/EmployeeCard.vue";

const emit = defineEmits(["addEmployee", "setEmployeeOfMonth"]);

const props = defineProps({
  employees: {
    type: Array,
  },
  isManager: {
    type: Boolean,
    required: true,
  },
  employeeOfMonth: {
    type: Object,
  },
});

const handleFormSubmit = (formValues) => {
  // re-emit the event
  emit("addEmployee", formValues);
};

const handleClick = (employee) => {
  // re-emit
  emit("setEmployeeOfMonth", employee);
};
</script>

<template>
  <section class="container">
    <Banner title="Manager Portal" sub-title="Add and view employees" />

    <EmployeeCard
      v-if="employeeOfMonth"
      :image-url="employeeOfMonth.imageUrl"
      :first-name="employeeOfMonth.firstName"
      :last-name="employeeOfMonth.lastName"
      :bio="employeeOfMonth.bio"
      :id="employeeOfMonth.id"
    />

    <AddEmployeeForm @add-employee="handleFormSubmit" />

    <EmployeesList
      :employees="employees"
      :isManager="isManager"
      message="No employees, please add employee"
      @set-employee-of-month="handleClick"
    />
  </section>
</template>
