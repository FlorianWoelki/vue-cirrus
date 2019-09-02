<template>
  <div class="home">
    <Navbar fixed />
    <Head />

    <FeaturesExplained />

    <div class="content">
      <GettingStarted />

      <v-space xlarge />
      <v-divider />
      <v-space xlarge />

      <Examples />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Head from '@/views/Home/Head.vue';
import Examples from '@/views/Home/Examples.vue';
import GettingStarted from '@/views/Home/GettingStarted.vue';
import FeaturesExplained from '@/components/FeaturesExplained.vue';

export default {
  components: {
    Navbar,
    Footer,
    Head,
    Examples,
    GettingStarted,
    FeaturesExplained,
  },
};
</script>
