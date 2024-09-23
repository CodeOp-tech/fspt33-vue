<script setup>
import { ref } from "vue";
import uuid4 from "uuid4";
import NavBar from "./components/NavBar.vue";
import ManagerView from "./pages/ManagerView.vue";
import EmployeeView from "./pages/EmployeeView.vue";

const isManager = ref(true);
const employees = ref([
  {
    imageUrl:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Bob",
    lastName: "Smith",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum soluta error unde facere sequi quibusdam molestiae temporibus, sit hic voluptate magni architecto ratione quia, nesciunt expedita est enim velit.",
    id: uuid4(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Alice",
    lastName: "Smith",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum soluta error unde facere sequi quibusdam molestiae temporibus, sit hic voluptate magni architecto ratione quia, nesciunt expedita est enim velit.",
    id: uuid4(),
  },
]);

const handleNavItemClick = (value) => {
  isManager.value = value;
};

const handleFormSubmit = (formValues) => {
  employees.value.push(formValues);
};
</script>

<template>
  <header>
    <NavBar @nav-item-click="handleNavItemClick" :is-manager="isManager" />
  </header>
  <main>
    <ManagerView
      v-if="isManager"
      :employees="employees"
      @add-employee="handleFormSubmit"
    />
    <EmployeeView v-else :employees="employees" />
  </main>
</template>
