<template>
  <div class="home">
    <Head />

    <div class="content">
      <GettingStarted />

      <a href="#">
        <v-btn animated btnStyle="accent">
          <i class="fas fa-arrow-circle-right fa-lg"></i> Check out the Components
        </v-btn>
      </a>
    </div>
  </div>
</template>

<script>
import Head from '@/views/Home/Head.vue';
import GettingStarted from '@/views/Home/GettingStarted.vue';

export default {
  components: {
    Head,
    GettingStarted,
  },
};
</script>
