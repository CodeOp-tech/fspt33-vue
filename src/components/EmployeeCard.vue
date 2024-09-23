<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="imageUrl"
          class="img-fluid rounded-start"
          alt="profile image of employee"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ firstName }} {{ lastName }}</h5>
          <p class="card-text">
            {{ bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
