<script setup>
import uuid4 from "uuid4";
import { ref } from "vue";

const emit = defineEmits(["addEmployee"]);

const firstName = ref("");
const lastName = ref("");
const imageUrl = ref("");
const bio = ref("");
</script>

<template>
  <form
    class="mb-3"
    @submit.prevent="
      emit('addEmployee', {
        firstName,
        lastName,
        imageUrl,
        bio,
        id: uuid4(),
      })
    "
  >
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input class="form-control" id="firstName" v-model="firstName" />
    </div>
    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input class="form-control" id="lastName" v-model="lastName" />
    </div>
    <div class="mb-3">
      <label for="imageUrl" class="form-label">Image URL</label>
      <input class="form-control" id="imageUrl" v-model="imageUrl" />
    </div>
    <div class="mb-3">
      <label for="bio" class="form-label">Short Bio</label>
      <textarea class="form-control" id="bio" v-model="bio"></textarea>
    </div>
    <div class="mb-3 text-center">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>
