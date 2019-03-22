<template>
  <section class="input-field">
    <v-text-area></v-text-area>
    <v-btn :onClick=onPlayClick>Play!</v-btn>
  </section>
</template>

<script>
export default {
  methods: {
    onPlayClick() {
      console.log('Clicked play');
    },
  },
};
</script>
