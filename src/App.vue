<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import ManagerView from "./pages/ManagerView.vue";
import EmployeeView from "./pages/EmployeeView.vue";

const isManager = ref(true);
const employees = ref([]);

const handleNavItemClick = (value) => {
  isManager.value = value;
};
</script>

<template>
  <header>
    <NavBar @nav-item-click="handleNavItemClick" :is-manager="isManager" />
  </header>
  <main>
    <ManagerView v-if="isManager" :employees="employees" />
    <EmployeeView v-else :employees="employees" />
  </main>
</template>
