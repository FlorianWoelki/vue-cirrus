<template>
  <div id="app">
    <Navbar />

    <section class="padtop">
      <!-- Replace with v-spacer.. is not working.. -->
      <v-space xlarge />
      <v-space xlarge />
      <div class="content">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
