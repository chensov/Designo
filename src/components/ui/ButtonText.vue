<script setup lang="ts">
defineProps(['to']);
</script>

<template>
  <router-link :to="{ name: to }" class="button-text">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.button-text {
  @apply z-10 text-base leading-5 tracking-[5px] text-white font-medium relative flex items-center gap-4;
}
.button-text::after {
  @apply border-t-2 border-t-primary border-r-2 border-r-primary aspect-square w-2 rotate-45 relative left-0 transition-all duration-300;
  content: '';
}
.button-text:hover::after {
  @apply left-2;
}
</style>
