<script setup>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import AddEmployeeForm from "./components/AddEmployeeForm.vue";
import EmployeesList from "./components/EmployeesList.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <Banner />

    <AddEmployeeForm />

    <EmployeesList />
  </main>
</template>
