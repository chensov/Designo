<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m mx-auto grid lg:grid-cols-3 gap-7 px-6 md:px-0;
}
</style>
