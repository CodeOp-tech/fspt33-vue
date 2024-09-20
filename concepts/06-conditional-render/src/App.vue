<script setup>
import Banner from "./components/Banner.vue";
import AboutMe from "./components/AboutMe.vue";
</script>

<template>
  <Banner title="My Portfolio" subTitle="All about me..." />
  <AboutMe
    firstName="Bob"
    lastName="Smith"
    profileImgUrl="https://images.unsplash.com/photo-1723117779554-86a2207307f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    email="bob.smith@email.com"
    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque deserunt nisi modi, velit deleniti harum optio repudiandae quis rem sapiente incidunt numquam dolores repellendus ipsam, non, voluptates natus. Minus."
  />
  <AboutMe
    firstName="Bob"
    lastName="Smith"
    profileImgUrl="https://images.unsplash.com/photo-1723117779554-86a2207307f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    email="bob.smith@email.com"
    bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque deserunt nisi modi, velit deleniti harum optio repudiandae quis rem sapiente incidunt numquam dolores repellendus ipsam, non, voluptates natus. Minus."
    socialMedia="https://www.google.co.uk/"
  />
</template>

<style scoped>
body {
  margin: 0px;
}
</style>
