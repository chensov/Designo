<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div id="page-container">
    <div id="header">
      <TheHeader />
    </div>
    <div id="main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div id="footer">
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
#page-container {
  @apply overflow-hidden;
}
#header {
  @apply relative z-50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
