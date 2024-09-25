<script setup>
import { ref } from "vue";
import AdminView from "./components/AdminView.vue";
import UserView from "./components/UserView.vue";
import Banner from "./components/Banner.vue";

// declare state variables
const isAdmin = ref(true);
const allProjects = ref([
  {
    title: "Car",
    image:
      "https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti explicabo repellat delectus laudantium temporibus ab amet veritatis reprehenderit velit totam quod, aliquid impedit est debitis voluptate quo possimus perspiciatis?",
  },
  {
    title: "Bike",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti explicabo repellat delectus laudantium temporibus ab amet veritatis reprehenderit velit totam quod, aliquid impedit est debitis voluptate quo possimus perspiciatis?",
  },
  {
    title: "Airplane",
    image:
      "https://images.unsplash.com/photo-1483375801503-374c5f660610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti explicabo repellat delectus laudantium temporibus ab amet veritatis reprehenderit velit totam quod, aliquid impedit est debitis voluptate quo possimus perspiciatis?",
  },
]);

const handleNavItemClick = (value) => {
  isAdmin.value = value;
};

const addProject = (project) => {
  allProjects.value.push(project);
};
</script>

<template>
  <div>
    <Banner :isAdmin="isAdmin" @nav-item-click="handleNavItemClick" />

    <AdminView v-if="isAdmin" @create-project="addProject" />
    <UserView v-else :allProjects="allProjects" />
  </div>
</template>

<style scoped></style>
