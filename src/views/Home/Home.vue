<template>
  <div class="home">
    <Head />

    <GettingStarted />
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
