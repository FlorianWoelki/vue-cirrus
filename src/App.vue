<template>
  <div id="app">
    <Navbar />

    <section class="padtop">
      <router-view />
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
