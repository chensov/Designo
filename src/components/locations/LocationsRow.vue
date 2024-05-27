<script setup>
import BaseButton from '../ui/BaseButton.vue';
</script>

<template>
  <div class="locations-row">
    <div class="canada">
      <div class="img-container">
        <img src="../../assets/shared/desktop/illustration-canada.svg" />
      </div>
      <h3>Canada</h3>
      <BaseButton theme="primary" to="locations">See location</BaseButton>
    </div>
    <div class="australia">
      <div class="img-container">
        <img src="../../assets/shared/desktop/illustration-australia.svg" />
      </div>
      <h3>Australia</h3>
      <BaseButton theme="primary" to="locations">See location</BaseButton>
    </div>
    <div class="uk">
      <div class="img-container">
        <img
          src="../../assets/shared/desktop/illustration-united-kingdom.svg"
        />
      </div>
      <h3>United Kingdom</h3>
      <BaseButton theme="primary" to="locations">See location</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.locations-row {
  @apply grid lg:grid-cols-3 xl:grid-cols-[350px_350px_350px] justify-center gap-12 lg:gap-0 lg:justify-between max-w-m mx-auto;
}
h3 {
  @apply uppercase;
}
.img-container {
  @apply relative w-48 mx-auto mb-12;
}
.canada .img-container::before,
.australia .img-container::before,
.uk .img-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.canada .img-container::before {
  background: linear-gradient(
    270deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
}
.australia .img-container::before {
  background: linear-gradient(
    180deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
}
.uk .img-container::before {
  background: linear-gradient(
    0deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
}
.locations-row h3 {
  @apply text-center mb-8;
}
.locations-row a {
  @apply block w-fit mx-auto;
}
</style>
