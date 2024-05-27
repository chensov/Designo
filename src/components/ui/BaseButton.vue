<script setup lang="ts">
defineProps(['theme', 'target', 'anchor']);
</script>

<template>
  <router-link :class="theme" :to="{ name: target }" class="button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.button {
  @apply inline-block text-sm font-medium leading-5 tracking-[1px] uppercase  px-4 py-5  rounded-lg duration-300;
}
.white {
  @apply bg-white text-dark;
}
.white:hover {
  @apply bg-primary-light text-white;
}
.primary {
  @apply bg-primary text-white border-solid border-2 border-primary transition;
}
.primary:hover {
  @apply bg-transparent text-primary;
}
</style>
