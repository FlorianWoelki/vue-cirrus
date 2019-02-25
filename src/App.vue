<template>
  <div id="app">
    <Navbar />

    <section class="padtop">
      <router-view />
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
