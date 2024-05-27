<script setup lang="ts">
import LocationSingle from '../components/locations/LocationSingle.vue';
</script>

<template>
  <section class="locations-section">
    <div id="canada">
      <LocationSingle>
        <template v-slot:title>
          <h2 class="title">Canada</h2>
        </template>
        <template v-slot:address>
          <p><b>Designo Central Office</b></p>
          <p>
            <a href="https://goo.gl/maps/BQDNzvLkVvDUy1j29" target="_blank"
              >3886 Wellington Street <br />Toronto, Ontario M9C 3J5</a
            >
          </p>
        </template>
        <template v-slot:contact>
          <p><b>Contact</b></p>
          <p><a href="tel:+12538638967">P : +1 253-863-8967</a></p>
          <p><a href="mailto:contact@designo.co">M : contact@designo.co</a></p>
        </template>
        <template v-slot:map>
          <img src="../assets/locations/desktop/image-map-canada.png" />
        </template>
      </LocationSingle>
    </div>
    <div id="australia">
      <LocationSingle reversed="reversed">
        <template v-slot:title>
          <h2 class="title">Australia</h2>
        </template>
        <template v-slot:address>
          <p><b>Designo AU Office</b></p>
          <p>
            <a href="https://goo.gl/maps/32qCJkK9ZxpQBcEB7" target="_blank"
              >19 Balonne Street,<br />
              New South Wales 2443</a
            >
          </p>
        </template>
        <template v-slot:contact>
          <p><b>Contact</b></p>
          <p><a href="tel:0267209092">P : (02) 6720 9092</a></p>
          <p><a href="mailto:contact@designo.au">M : contact@designo.au</a></p>
        </template>
        <template v-slot:map>
          <img src="../assets/locations/desktop/image-map-australia.png" />
        </template>
      </LocationSingle>
    </div>
    <div id="uk">
      <LocationSingle>
        <template v-slot:title>
          <h2 class="title">United Kingdom</h2>
        </template>
        <template v-slot:address>
          <p><b>Designo UK Office</b></p>
          <p>
            <a href="https://goo.gl/maps/XkKYpXkqk25ApLxXA"
              >13 Colorado Way,<br />
              Rhyd-y-fro SA8 9GA</a
            >
          </p>
        </template>
        <template v-slot:contact>
          <p><b>Contact</b></p>
          <p><a href="tel:07831151400">P : 078 3115 1400</a></p>
          <p><a href="mailto:contact@designo.uk">M : contact@designo.uk</a></p>
        </template>
        <template v-slot:map>
          <img src="../assets/locations/desktop/image-map-united-kingdom.png" />
        </template>
      </LocationSingle>
    </div>
  </section>
</template>

<style scoped>
.locations-section {
  @apply grid gap-8 md:gap-32 lg:gap-8 pb-32 lg:pb-40 md:px-10;
}
.title {
  @apply text-primary text-center lg:text-left;
}
img {
  @apply w-full max-h-80 object-cover;
}
</style>
