<template>
  <div class="home">
    <Head />

    <div class="content">
      <GettingStarted />
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
