<template>
  <section class="text-areas-component">
    <h5>Text Areas</h5>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <v-container>
          <v-text-area placeholder="Type your text here ..."></v-text-area>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      code: '<xmp><v-text-area placeholder="Type your text here ..."></v-text-area></xmp>',
    };
  },
};
</script>
