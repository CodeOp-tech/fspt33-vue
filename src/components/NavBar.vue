<script setup>
const emit = defineEmits(["navItemClick"]);
const props = defineProps({
  isManager: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand">Bubbles</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button
              :class="`btn btn-link nav-link ${isManager ? 'active' : ''}`"
              @click="emit('navItemClick', true)"
            >
              Manager
            </button>
          </li>
          <li class="nav-item">
            <button
              :class="`btn btn-link nav-link ${!isManager ? 'active' : ''}`"
              @click="emit('navItemClick', false)"
            >
              Employee
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
