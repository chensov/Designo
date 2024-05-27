<script setup lang="ts">
import DefaultHero from '../components/heros/DefaultHero.vue';
import CardFeature from '../components/features/CardFeature.vue';
import CardFeatureRow from '../components/features/CardFeatureRow.vue';
import SimilarServicesRow from '../components/services/SimilarServicesRow.vue';
import SingleService from '../components/services/SingleService.vue';
const features = [
  {
    title: 'AIRFILTER',
    description:
      'Solving the problem of poor indoor air quality by filtering the air',
    image: '/src/assets/app-design/desktop/image-airfilter.jpg',
  },
  {
    title: 'EYECAM',
    description:
      'Product that lets you edit your favorite photos and videos at any time',
    image: '/src/assets/app-design/desktop/image-eyecam.jpg',
  },
  {
    title: 'FACEIT',
    description:
      'Get to meet your favorite internet superstar with the faceit app',
    image: '/src/assets/app-design/desktop/image-faceit.jpg',
  },
  {
    title: 'TODO',
    description: 'A todo app that features cloud sync with light and dark mode',
    image: '/src/assets/app-design/desktop/image-todo.jpg',
  },
  {
    title: 'LOOPSTUDIOS',
    description: 'A VR experience app made for Loopstudios',
    image: '/src/assets/app-design/desktop/image-loopstudios.jpg',
  },
];
</script>
<template>
  <div>
    <div class="app-design-hero">
      <DefaultHero
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
    </div>
    <div class="app-design-features">
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
    <div class="app-design-services">
      <SimilarServicesRow>
        <SingleService
          title="Web Design"
          target="web-design"
          image="/src/assets/home/desktop/image-web-design-small.jpg"
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
.app-design-hero,
.app-design-features,
.app-design-services {
  @apply pb-32 lg:pb-40 relative md:px-10;
}

.app-design-hero::before {
  @apply content-[''] absolute left-0 top-1/2 w-[70%] aspect-[1.69/1] lg:bg-light -z-10 rounded-tl-[300px] rounded-tr-[300px] rounded-br-[300px];
}
</style>
