<script setup lang="ts">
defineProps(['reversed']);
</script>

<template>
  <div class="row" :class="[reversed]">
    <div class="text-col">
      <div class="col-wrapper">
        <div class="title">
          <slot name="title">title</slot>
        </div>
        <div class="info">
          <div class="address">
            <slot name="address">address</slot>
          </div>
          <div class="contact">
            <slot name="contact">contact</slot>
          </div>
        </div>
      </div>
    </div>
    <div class="map-col">
      <slot name="map">map</slot>
    </div>
  </div>
</template>

<style scoped>
.row {
  @apply w-full max-w-m mx-auto grid lg:grid-cols-[1fr_350px] md:gap-8;
}
.text-col {
  @apply bg-primary-lighter md:rounded-2xl flex items-center;
}
.map-col {
  @apply md:rounded-2xl overflow-hidden;
}
.col-wrapper {
  @apply lg:max-w-lg mx-auto w-full py-20 lg:py-0;
}
.title {
  @apply mb-8;
}
.info {
  @apply flex flex-col lg:flex-row gap-6;
}
.address,
.contact {
  @apply text-center lg:text-left;
}
.contact {
  @apply mx-auto;
}
.row.reversed {
  @apply lg:grid-cols-[350px_1fr];
}
.row:not(.reversed) .map-col {
  @apply -order-1 lg:order-1;
}
.row.reversed .map-col {
  @apply -order-1;
}
.text-col {
  background-image: url('../../assets/shared/desktop/bg-pattern-two-circles.svg');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 70%;
}
</style>
