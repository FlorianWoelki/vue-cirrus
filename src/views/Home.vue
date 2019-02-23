<template>
  <div class="home">
    <HelloWorld />
    <v-btn animated loadingLeft>Button</v-btn>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
