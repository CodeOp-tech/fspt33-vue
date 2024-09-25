<script setup>
import { ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import CurrentProjectCard from "./CurrentProjectCard.vue";

const props = defineProps({
  allProjects: {
    type: Array,
    required: true,
  },
});

const currentProject = ref(props.allProjects[0]);

const handleCurrentProject = (project) => {
  currentProject.value = project;
};
</script>

<template>
  <CurrentProjectCard
    v-if="currentProject"
    :title="currentProject.title"
    :image="currentProject.image"
    :description="currentProject.description"
  />
  <section>
    <ProjectCard
      v-for="project in allProjects"
      :title="project.title"
      :image="project.image"
      :description="project.description"
      @show-current-project="handleCurrentProject"
    />
  </section>
</template>

<style scoped></style>
