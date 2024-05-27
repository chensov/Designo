<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue';
</script>

<template>
  <div class="home-hero-row">
    <div class="col">
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <BaseButton theme="white" target="about">Learn more</BaseButton>
    </div>
    <div class="bg-container"></div>
  </div>
</template>

<style scoped>
/* General settings */
.home-hero-row {
  @apply bg-primary max-w-m mx-auto text-white pt-20  relative bg-no-repeat bg-[left_center];
  background-image: url('../../assets/home/desktop/bg-pattern-hero-home.svg');
}

.col {
  @apply text-center px-6;
}
.home-hero-row p {
  @apply max-w-[445px] mx-auto mt-3 mb-6;
}

.bg-container {
  @apply w-full  aspect-[1/1.46] pointer-events-none bg-[length:150%] bg-[center_top] -mt-[20%];
  background-image: url('../../assets/home/desktop/image-hero-phone.png');
}

/* Tablet settings */
.home-hero-row {
  @apply md:rounded-2xl md:pt-16 md:bg-[170px_center];
}
.bg-container {
  @apply md:max-w-[450px] md:mx-auto md:-mt-[15%];
}

/* Desktop settings */
.home-hero-row {
  @apply lg:px-24 lg:py-36 lg:bg-[right_center];
}
.col {
  @apply xl:max-w-[540px] lg:max-w-[440px] lg:text-left lg:pl-0;
}
.home-hero-row p {
  @apply lg:my-10 lg:ml-0;
}
.bg-container {
  @apply lg:absolute lg:max-w-xl lg:bottom-0 lg:right-0 lg:bg-auto lg:bg-[center_145px];
}
</style>
