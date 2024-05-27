<script setup lang="ts">
import ButtonText from '../ui/ButtonText.vue';

defineProps(['title', 'target', 'image']);
</script>

<template>
  <div class="service" :style="{ backgroundImage: 'url(' + image + ')' }">
    <h2>{{ title }}</h2>
    <ButtonText :to="target">View projects</ButtonText>
  </div>
</template>

<style scoped>
.service {
  @apply py-24 rounded-2xl relative overflow-hidden;
}
.service::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0;
}
h2 {
  @apply text-white text-center uppercase mb-6 z-10 relative;
}
.service .button-text {
  @apply justify-center uppercase;
}
</style>
