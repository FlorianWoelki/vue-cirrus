<template>
  <div id="one-page">
    <v-navbar dark fixed>
      <template v-slot:brandTitle><h6>One Page</h6></template>
      <div class="nav-right">
        <v-navbar-item selected>Features</v-navbar-item>
        <v-navbar-item>Pricing</v-navbar-item>
      </div>
    </v-navbar>

    <v-parallax
      fullscreen
      image="https://cdn.clipart.email/98b8348023d6a9d2eb28c346bea1c468_28-collection-of-midnight-sky-clipart-high-quality-free-_2560-1600.jpeg"
    >
      <v-row>
        <v-col>
          <h1 class="white uppercase u-text-center">One Page</h1>
          <p class="white u-text-center">A One Page product made with Vue Cirrus</p>
          <v-btn light outline center>Checkout the Demo!</v-btn>
          <v-space xlarge />
          <div class="animated pulse infinite u-center white">
            <i class="fas fa-arrow-down fa-2x"></i>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-space xlarge />

    <OnePageFeatures />

    <v-space xlarge />

    <OnePagePricing />

    <OnePageFooter />
  </div>
</template>

<script>
import OnePageFeatures from '@/views/Examples/OnePage/OnePageFeatures.vue';
import OnePagePricing from '@/views/Examples/OnePage/OnePagePricing.vue';
import OnePageFooter from '@/views/Examples/OnePage/OnePageFooter.vue';

export default {
  components: {
    OnePageFeatures,
    OnePagePricing,
    OnePageFooter,
  },
};
</script>
