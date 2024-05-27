<script setup lang="ts">
import DefaultHero from '../components/heros/DefaultHero.vue';
import CardFeature from '../components/features/CardFeature.vue';
import CardFeatureRow from '../components/features/CardFeatureRow.vue';
import SimilarServicesRow from '../components/services/SimilarServicesRow.vue';
import SingleService from '../components/services/SingleService.vue';
const features = [
  {
    title: 'TIM BROWN',
    description: "A book cover designed for Tim Brown's new release, 'Change'",
    image: '/src/assets/graphic-design/desktop/image-change.jpg',
  },
  {
    title: 'BOXED WATER',
    description: 'A simple packaging concept made for Boxed Water',
    image: '/src/assets/graphic-design/desktop/image-boxed-water.jpg',
  },
  {
    title: 'SCIENCE!',
    description: 'A poster made in collaboration with the Federal Art Project',
    image: '/src/assets/graphic-design/desktop/image-science.jpg',
  },
];
</script>
<template>
  <div>
    <div class="graphic-design-hero">
      <DefaultHero
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
    </div>
    <div class="graphic-design-features">
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
    <div class="graphic-design-services">
      <SimilarServicesRow>
        <SingleService
          title="App Design"
          target="app-design"
          image="/src/assets/home/desktop/image-app-design.jpg"
        />
        <SingleService
          title="Web Design"
          target="web-design"
          image="/src/assets/home/desktop/image-web-design-small.jpg"
        />
      </SimilarServicesRow>
    </div>
  </div>
</template>

<style scoped>
.graphic-design-hero,
.graphic-design-features,
.graphic-design-services {
  @apply pb-32 lg:pb-40 relative md:px-10;
}

.graphic-design-hero::before {
  @apply content-[''] absolute left-0 top-1/2 w-[70%] aspect-[1.69/1] lg:bg-light -z-10 rounded-tl-[300px] rounded-tr-[300px] rounded-br-[300px];
}
</style>
