<script setup lang="ts">
import ButtonText from '../ui/ButtonText.vue';

defineProps(['left', 'rightTop', 'rightBottom']);

function getUrl(service: string) {
  switch (service) {
    case 'web':
      return 'web-design';
    case 'app':
      return 'app-design';
    case 'graphic':
      return 'graphic-design';
    default:
      return '#';
  }
}
</script>

<template>
  <div class="services-row">
    <div class="left-col" :class="[left]">
      <h2>{{ left }} design</h2>
      <ButtonText :to="getUrl(left)">VIEW PROJECTS</ButtonText>
    </div>
    <div class="right-col">
      <div class="right-top" :class="[rightTop]">
        <h2>{{ rightTop }} design</h2>
        <ButtonText :to="getUrl(rightTop)">VIEW PROJECTS</ButtonText>
      </div>
      <div class="right-bottom" :class="[rightBottom]">
        <h2>{{ rightBottom }} design</h2>
        <ButtonText :to="getUrl(rightBottom)">VIEW PROJECTS</ButtonText>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-row {
  @apply aspect-[1.81/1] grid lg:grid-cols-2 gap-6 lg:gap-x-7 relative max-w-m mx-auto;
}
.left-col,
.right-top,
.right-bottom {
  @apply relative rounded-2xl bg-no-repeat bg-cover flex items-center justify-center text-white flex-col uppercase min-h-[250px] md:min-h-[200px];
}
.left-col::before,
.right-top::before,
.right-bottom::before {
  @apply content-[''] absolute top-0 left-0 w-full h-full rounded-2xl bg-black bg-opacity-50 z-0 duration-300;
}
.left-col:hover::before,
.right-top:hover::before,
.right-bottom:hover::before {
  @apply bg-primary bg-opacity-80;
}
.left-col:hover a::after,
.right-top:hover a::after,
.right-bottom:hover a::after {
  @apply border-r-white border-t-white;
}
.right-col {
  @apply grid grid-rows-2 gap-y-6;
}
.web {
  @apply bg-bottom;
  background-image: url('../../assets/home/desktop/image-web-design-large.jpg');
}
.app {
  background-image: url('../../assets/home/desktop/image-app-design.jpg');
  @apply md:bg-center;
}
.graphic {
  background-image: url('../../assets/home/desktop/image-graphic-design.jpg');
}
h2 {
  @apply z-10 mb-3 md:mb-6;
}
</style>
