<template>
  <section class="input-fields">
    <h5>Text Areas</h5>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 35px;"
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
