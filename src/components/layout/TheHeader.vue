<script setup lang="ts">
import { ref } from 'vue';
const isMobileMenuActive = ref(false);
</script>

<template>
  <header class="header-container">
    <div class="left-col">
      <router-link :to="{ name: 'home' }">
        <img
          src="../../assets/shared/desktop/logo-dark.png"
          alt="logo dark"
          class="header-logo"
        />
      </router-link>
    </div>
    <div class="right-col">
      <nav>
        <div class="mobile-menu">
          <button
            class="mobile-menu-button"
            :class="{ active: isMobileMenuActive }"
            @click="isMobileMenuActive = !isMobileMenuActive"
          >
            <span class="top"></span>
            <span class="center"></span>
            <span class="bottom"></span>
          </button>
          <ul class="mobile-menu-list" v-show="isMobileMenuActive">
            <li class="mobile-menu-list-item">
              <router-link :to="{ name: 'about' }">Our Company</router-link>
            </li>
            <li class="mobile-menu-list-item">
              <router-link :to="{ name: 'locations' }">Locations</router-link>
            </li>
            <li class="mobile-menu-list-item">
              <router-link :to="{ name: 'contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
        <ul class="menu-list">
          <li class="menu-list-item">
            <router-link :to="{ name: 'about' }">Our Company</router-link>
          </li>
          <li class="menu-list-item">
            <router-link :to="{ name: 'locations' }">Locations</router-link>
          </li>
          <li class="menu-list-item">
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* General settings */
.header-container {
  @apply max-w-m mx-auto flex items-center justify-between gap-4 px-6 py-9 relative z-10;
}
.header-logo {
  @apply w-full max-w-[202px];
}
.mobile-menu-button {
  @apply w-[24px] grid gap-1;
}

.mobile-menu-button.active {
  @apply h-[27px] gap-0 w-[22px];
}
.mobile-menu-button.active .center {
  @apply hidden;
}
.mobile-menu-button.active .top {
  transform-origin: top left;
  rotate: 45deg;
  transform: translate(2px, 2px);
}
.mobile-menu-button.active .bottom {
  transform-origin: bottom left;
  rotate: -45deg;
  transform: translate(-2px, 2px);
}
.mobile-menu-button > span {
  @apply w-full bg-dark h-[3px];
}
.menu-list-item {
  @apply text-sm leading-none font-normal text-dark uppercase tracking-[2px];
}
.menu-list {
  @apply hidden;
}
.menu-list-item > a:hover {
  @apply underline;
}
.mobile-menu-list {
  @apply absolute w-full top-full left-0 bg-dark py-12 px-6 grid gap-8;
}

.mobile-menu-list-item {
  @apply text-white uppercase text-2xl leading-none tracking-[2px];
}
.mobile-menu {
  @apply md:hidden;
}
/* Tablet settings */
.header-container {
  @apply md:px-10 md:py-16;
}
/* Desktop settings */
.header-container {
  @apply xl:px-0;
}
.menu-list {
  @apply md:flex md:items-center md:gap-10;
}
</style>
