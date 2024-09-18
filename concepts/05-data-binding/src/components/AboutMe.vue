<template>
  <section>
    <h3 class="title">{{ firstName }} {{ lastName }}</h3>
    <div class="container">
      <div class="image-item">
        <img :src="profileImgUrl" alt="profile picture for user" class="img" />
      </div>
      <div class="content-item">
        <p>
          {{ bio }}
        </p>
      </div>
    </div>
    <div class="links-container">
      <a :href="`mailto:${email}`">Email Me</a>
    </div>
  </section>
</template>

<style scoped>
.title {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image-item {
  flex: 1;
  margin: 0px 16px;
}

.content-item {
  flex: 2;
  margin: 0px 16px;
}

.img {
  object-fit: contain;
  width: 100%;
}

p {
  margin: 0;
}

.links-container {
  text-align: center;
  padding: 20px;
}
</style>

<script setup>
const props = defineProps({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profileImgUrl: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
</script>
