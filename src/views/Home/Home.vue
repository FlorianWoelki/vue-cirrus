<template>
  <div class="home">
    <Navbar fixed />
    <Head />

    <div class="content">
      <GettingStarted />

      <a href="#">
        <v-btn animated btnStyle="accent">
          <i class="fas fa-arrow-circle-right fa-lg"></i> Check out the Components
        </v-btn>
      </a>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Head from '@/views/Home/Head.vue';
import GettingStarted from '@/views/Home/GettingStarted.vue';

export default {
  components: {
    Navbar,
    Footer,
    Head,
    GettingStarted,
  },
};
</script>
