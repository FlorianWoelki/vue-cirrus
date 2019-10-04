<template>
  <div id="one-page">
    <v-navbar brandTitle="OnePage" dark fixed>
      <div class="nav-right">
        <v-navbar-item selected>Features</v-navbar-item>
        <v-navbar-item>Pricing</v-navbar-item>
      </div>
    </v-navbar>

    <v-parallax fullscreen image="https://www.ubackground.com/_ph/17/56501308.jpg">
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
  </div>
</template>

<script>
import OnePageFeatures from '@/views/Examples/OnePage/OnePageFeatures.vue';
import OnePagePricing from '@/views/Examples/OnePage/OnePagePricing.vue';

export default {
  components: {
    OnePageFeatures,
    OnePagePricing,
  },
};
</script>
