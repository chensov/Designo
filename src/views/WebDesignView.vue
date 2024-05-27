<script setup lang="ts">
import DefaultHero from '../components/heros/DefaultHero.vue';
import CardFeature from '../components/features/CardFeature.vue';
import CardFeatureRow from '../components/features/CardFeatureRow.vue';
import SimilarServicesRow from '../components/services/SimilarServicesRow.vue';
import SingleService from '../components/services/SingleService.vue';
const features = [
  {
    title: 'EXPRESS',
    description: 'A multi-carrier shipping website for ecommerce businesses',
    image: '/src/assets/web-design/desktop/image-express.jpg',
  },
  {
    title: 'TRANSFER',
    description:
      'Site for low-cost money transfers and sending money within seconds',
    image: '/src/assets/web-design/desktop/image-transfer.jpg',
  },
  {
    title: 'PHOTON',
    description:
      'A state-of-the-art music player with high-resolution audio and DSP effects',
    image: '/src/assets/web-design/desktop/image-photon.jpg',
  },
  {
    title: 'BUILDER',
    description:
      'Connects users with local contractors based on their location',
    image: '/src/assets/web-design/desktop/image-builder.jpg',
  },
  {
    title: 'BLOGR',
    description:
      'Blogr is a platform for creating an online blog or publication',
    image: '/src/assets/web-design/desktop/image-blogr.jpg',
  },
  {
    title: 'CAMP',
    description:
      'Get expert training in coding, data, design, and digital marketing',
    image: '/src/assets/web-design/desktop/image-camp.jpg',
  },
];
</script>
<template>
  <div>
    <div class="web-design-hero">
      <DefaultHero
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
    </div>
    <div class="web-design-features">
      <CardFeatureRow>
        <CardFeature
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :image="feature.image"
        />
      </CardFeatureRow>
    </div>
    <div class="web-design-services">
      <SimilarServicesRow>
        <SingleService
          title="App Design"
          target="app-design"
          image="/src/assets/home/desktop/image-app-design.jpg"
        />
        <SingleService
          title="Graphic Design"
          target="graphic-design"
          image="/src/assets/home/desktop/image-graphic-design.jpg"
        />
      </SimilarServicesRow>
    </div>
  </div>
</template>

<style scoped>
.web-design-hero,
.web-design-features,
.web-design-services {
  @apply pb-32 lg:pb-40 relative md:px-10;
}

.web-design-hero::before {
  @apply content-[''] absolute left-0 top-1/2 w-[70%] aspect-[1.69/1] lg:bg-light -z-10 rounded-tl-[300px] rounded-tr-[300px] rounded-br-[300px];
}
</style>
