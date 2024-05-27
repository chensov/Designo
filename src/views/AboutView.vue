<script setup lang="ts">
import TextImageRow from '../components/TextImageRow.vue';
import LocationsRow from '../components/locations/LocationsRow.vue';
</script>

<template>
  <div>
    <section class="about-hero-section">
      <TextImageRow theme="primary">
        <template v-slot:text>
          <h1 class="mb-8">About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </template>
        <template v-slot:image>
          <img
            src="../assets/about/desktop/image-about-hero.jpg"
            alt="hero image"
            class="full-image"
          />
        </template>
      </TextImageRow>
    </section>
    <section class="about-talent-section">
      <TextImageRow theme="light" reversed="reversed">
        <template v-slot:text>
          <h2 class="text-primary mb-3">World-class talent</h2>
          <p class="mb-4">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand's story and mission.
          </p>
        </template>
        <template v-slot:image>
          <img
            class="full-image"
            src="../assets/about/desktop/image-world-class-talent.jpg"
            alt="world class talent"
          />
        </template>
      </TextImageRow>
    </section>
    <section class="about-locations-section">
      <LocationsRow />
    </section>
    <section class="about-deal-section">
      <TextImageRow theme="light">
        <template v-slot:text>
          <h2 class="text-primary mb-6">The real deal</h2>
          <p class="mb-6">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </template>
        <template v-slot:image>
          <img
            class="full-image"
            src="../assets/about/desktop/image-real-deal.jpg"
            alt="real deal image"
          />
        </template>
      </TextImageRow>
    </section>
  </div>
</template>

<style scoped>
.about-deal-section {
  @apply pb-32;
}
.about-hero-section,
.about-talent-section,
.about-locations-section,
.about-deal-section {
  @apply md:pb-32 lg:pb-40 md:px-10;
}
.full-image {
  @apply h-80 w-full object-center lg:h-full object-cover;
}
.about-talent-section .full-image {
  @apply object-bottom md:object-[100%_70%];
}
.about-locations-section {
  @apply py-32 md:pt-0;
}
.about-hero-section .full-image {
  @apply md:object-[100%_75%];
}
</style>
