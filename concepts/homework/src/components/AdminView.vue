<template>
  <div>
    Title
    <input v-model="title" />
    Image
    <input v-model="image" />
    Description
    <input v-model="description" />
    <button
      @click="
        emit('createProject', {
          title,
          image,
          description,
        })
      "
    >
      SUBMIT
    </button>
  </div>
</template>

<!-- <script>
export default {
  name: "AdminView",
  data() {
    return {
      title: "",
      image: "",
      description: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("createProject", {
        title: this.title,
        image: this.image,
        description: this.description
      });
    }
  }
};
</script> -->

<script setup>
import { ref } from "vue";

const emit = defineEmits(["createProject"]);

const title = ref("");
const image = ref("");
const description = ref("");
</script>

<style></style>
