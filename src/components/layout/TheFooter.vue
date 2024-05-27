<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue';
import IconFacebook from '../icons/IconFacebook.vue';
import IconYoutube from '../icons/IconYoutube.vue';
import IconTwitter from '../icons/IconTwitter.vue';
import IconPinterest from '../icons/IconPinterest.vue';
import IconInstagram from '../icons/IconInstagram.vue';
</script>
<template>
  <footer>
    <section class="cta-section">
      <div class="cta-row">
        <div class="left-col">
          <h2>Let's talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div class="right-col">
          <BaseButton theme="white" to="contact">Get in touch</BaseButton>
        </div>
      </div>
    </section>
    <section class="footer-section">
      <div class="footer-main-row">
        <div class="left-col">
          <router-link to="/" class="footer-logo-wrapper">
            <img
              src="../../assets/shared/desktop/logo-light.png"
              alt="logo light"
              class="footer-logo"
            />
          </router-link>
        </div>
        <div class="right-col">
          <nav>
            <ul class="footer-pages">
              <li>
                <router-link :to="{ name: 'about' }">Our Company</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'locations' }">Locations</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contact' }">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer-contact-row">
        <div class="address-col">
          <div class="address">
            <p><b>Designo Central Office</b></p>
            <p>
              <a href="https://goo.gl/maps/baHgKYJkVJjEMa1Q7" target="_blank"
                >3886 Wellington Street<br />
                Toronto, Ontario M9C 3J5</a
              >
            </p>
          </div>
        </div>
        <div class="contact-col">
          <p><b>Contact Us (Central Office)</b></p>
          <p>
            <a href="tel:+12538638967">P : +1 253-863-8967</a> <br />
            <a href="mailto:contact@designo.co">M : contact@designo.co</a>
          </p>
        </div>
        <div class="social-col">
          <ul class="social-list">
            <li class="social-list-item">
              <a target="_blank" href="https://facebook.com"
                ><IconFacebook
              /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://youtube.com"><IconYoutube /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://twitter.com"><IconTwitter /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://pinterest.com"
                ><IconPinterest
              /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://instagram.com"
                ><IconInstagram
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
/* General settings */
footer {
  @apply isolate;
}
.cta-section {
  @apply z-20 relative px-6;
}
.cta-row {
  @apply bg-primary rounded-2xl text-white max-w-m mx-auto -mb-16 bg-no-repeat bg-[40%_center] text-center py-16 px-6;
  background-image: url('../../assets/shared/desktop/bg-pattern-call-to-action.svg');
}
.footer-section {
  @apply z-10 relative px-6;
}
.cta-row h2 {
  @apply mb-2  tracking-normal max-w-[270px] mx-auto;
}
.cta-row p {
  @apply max-w-[460px] mx-auto mb-8;
}
.footer-section {
  @apply bg-black text-white pt-32 pb-16;
}
.footer-main-row {
  @apply pb-10;
}
.footer-logo-wrapper {
  @apply block border-b border-solid border-white border-opacity-10 mb-8;
}

.footer-logo {
  @apply w-full max-w-[202px] mx-auto pb-8;
}
.footer-pages {
  @apply uppercase text-sm font-normal leading-none flex items-center flex-col gap-8;
}
.footer-contact-row {
  @apply max-w-m mx-auto grid  gap-10  text-center;
}
.footer-contact-row p {
  @apply text-opacity-50 text-white;
}
.social-col {
  @apply grid justify-center items-end;
}

.social-list {
  @apply flex gap-4 items-center;
}
.footer-pages > li > a:hover {
  @apply underline;
}
.social-list-item svg {
  @apply duration-300;
}
.social-list-item:hover svg {
  @apply brightness-125;
}
/* Tablet Settings */
.footer-logo-wrapper {
  @apply md:border-b-0 md:mb-0;
}
.footer-main-row {
  @apply md:border-b md:border-solid md:border-white md:border-opacity-10 md:max-w-m md:mx-auto md:flex md:items-center md:justify-between md:gap-4;
}
.footer-logo {
  @apply md:pb-0;
}
.footer-pages {
  @apply md:gap-10 md:flex-row;
}
.cta-row h2 {
  @apply md:mb-5;
}
.footer-section {
  @apply md:pb-20;
}
.footer-contact-row {
  @apply md:grid-cols-[225px_225px_1fr] md:gap-3 md:pt-8 md:text-left;
}
.social-col {
  @apply md:justify-end;
}
/* Desktop Settings */
.cta-row {
  @apply lg:pt-16 lg:pb-11 lg:px-20 lg:flex lg:items-center lg:gap-8 lg:justify-between lg:bg-right lg:bg-[length:80%] lg:text-left;
}
.cta-row h2 {
  @apply lg:ml-0;
}
.footer-section {
  @apply lg:pt-36;
}
.footer-contact-row {
  @apply lg:grid-cols-[350px_350px_1fr] lg:justify-between lg:gap-8;
}
</style>
