<script setup lang="ts">
defineProps(['title', 'description', 'image']);
</script>

<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" />
    </div>
    <div class="card-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-primary-lighter rounded-2xl overflow-hidden duration-300 md:grid md:grid-cols-2 md:items-center lg:grid-cols-1;
}
.card:hover {
  @apply bg-primary;
}
.card:hover h3,
.card:hover p {
  @apply text-white;
}
.card-body {
  @apply text-center p-8;
}
h3 {
  @apply text-primary mb-4;
}
</style>
