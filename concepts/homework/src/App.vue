<template>
  <div>
    <h1>Hello World</h1>
    <button @click="showAdminView">ADMIN</button>
    <button @click="showUserView">USER</button>
    <AdminView v-if="isAdmin" @create-project="addProject" />
    <UserView v-else />
  </div>
</template>

<!-- <script>
import AdminView from "./components/AdminView.vue";
import UserView from "./components/UserView.vue";

export default {
  name: "app",
  components: {
    userView: UserView,
    adminView: AdminView
  },
  data() {
    return {
      isAdmin: true,
      allProjects: []
    };
  },
  methods: {
    addProject(project) {
      this.allProjects.push(project);
    }
  }
};
</script> -->

<script setup>
import { ref } from "vue";
import AdminView from "./components/AdminView.vue";
import UserView from "./components/UserView.vue";

// declare state variables
const isAdmin = ref(true);
const allProjects = ref([]);

const showAdminView = () => {
  isAdmin.value = true;
};

const showUserView = () => {
  isAdmin.value = false;
};

const addProject = (project) => {
  allProjects.value.push(project);
  console.log(allProjects.value);
};
</script>

<style></style>
