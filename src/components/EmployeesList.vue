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
  isManager: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["setEmployeeOfMonth"]);

const handleClick = (employee) => {
  // re-emit
  emit("setEmployeeOfMonth", employee);
};
</script>

<template>
  <Alert v-if="employees.length === 0" :message="message" />
  <ul v-else>
    <EmployeeCard
      v-for="employee in employees"
      :image-url="employee.imageUrl"
      :first-name="employee.firstName"
      :last-name="employee.lastName"
      :bio="employee.bio"
      :id="employee.id"
      :isManager="isManager"
      @set-employee-of-month="handleClick"
    />
  </ul>
</template>
