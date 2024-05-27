<script setup lang="ts"></script>

<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m mx-auto grid lg:grid-cols-2 gap-7 px-6 lg:px-10 md:px-0;
}
</style>
