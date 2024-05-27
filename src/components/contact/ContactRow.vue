<script setup lang="ts">
import ContactForm from './ContactForm.vue';
</script>

<template>
  <div class="row">
    <div class="left-col">
      <h1>Contact Us</h1>
      <p class="desc">
        Ready to take it to the next level? Let's talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that's relatable to your users, drop us a
        line.
      </p>
    </div>
    <div class="right-col">
      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m w-full mx-auto bg-primary md:rounded-2xl py-20 lg:py-14 px-6 md:px-16 lg:px-24 text-white grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center relative overflow-hidden text-center md:text-left;
}
.row::before {
  @apply content-[''] absolute bottom-0 left-0 w-[60%] aspect-square opacity-30 rounded-full mix-blend-normal;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  transform: matrix(0, 1, 1, 0, 0, 0);
}
.row > div {
  @apply z-10;
}
h1 {
  @apply mb-8;
}
.desc {
  @apply max-w-md;
}
</style>
