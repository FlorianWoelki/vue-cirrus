<template>
  <div class="home">
    <Navbar fixed />
    <Head />

    <FeaturesExplained />

    <div class="content">
      <GettingStarted />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Head from '@/views/Home/Head.vue';
import GettingStarted from '@/views/Home/GettingStarted.vue';
import FeaturesExplained from '@/components/FeaturesExplained.vue';

export default {
  components: {
    Navbar,
    Footer,
    Head,
    GettingStarted,
    FeaturesExplained,
  },
};
</script>
