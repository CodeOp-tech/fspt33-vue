<script setup>
import Countries from "./components/Countries.vue";

const visitedCountries = ["Country 1", "Country 2", "Country 3"];

const wishListCountries = ["Country A", "Country B"];
</script>

<template>
  <h1>Places I have visited</h1>
  <Countries :countries="visitedCountries" />

  <h1>Places I have wish to visit</h1>
  <Countries :countries="wishListCountries" />
</template>

<style scoped>
body {
  margin: 0px;
}
</style>
