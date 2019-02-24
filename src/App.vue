<template>
  <div id="app">
    <Navbar />

    <section class="padtop">
      <!-- Replace with v-spacer.. is not working.. -->
      <space class="x-large"></space>
      <space class="x-large"></space>
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
