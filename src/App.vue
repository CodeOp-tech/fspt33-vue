<script setup>
import NavBar from "./components/NavBar.vue";
import ManagerView from "./pages/ManagerView.vue";
import EmployeeView from "./pages/EmployeeView.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <ManagerView />
    <!-- <EmployeeView /> -->
  </main>
</template>
