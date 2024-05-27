<script setup lang="ts">
import LocationsRow from '../components/locations/LocationsRow.vue';
import ContactRow from '../components/contact/ContactRow.vue';
</script>

<template>
  <div>
    <div class="contact-form-section">
      <ContactRow />
    </div>
    <div class="contact-locations-section">
      <LocationsRow />
    </div>
  </div>
</template>

<style scoped>
.contact-form-section,
.contact-locations-section {
  @apply mb-32 lg:mb-40 relative md:px-10;
}
.contact-locations-section::after {
  @apply lg:bg-light -z-10 rounded-[300px] rounded-bl-none;
  content: '';
  position: absolute;
  top: 90px;
  right: 0;
  width: 70%;
  aspect-ratio: 1.69 / 1;
}
</style>
