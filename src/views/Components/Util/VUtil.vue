<template>
  <section class="util-component">
    <p>This view will reveal, what utils Vue-Cirrus has.</p>

    <v-space xlarge />

    <h5>Container</h5>
    <p>A container will container the child components or views.</p>
    <v-row>
      <v-col c6>
        <v-code
          dark
          lang="Vue"
        >
          <xmp v-html=containerCode></xmp>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 45px;"
      >
        <v-container>
          <v-btn>Testing Container</v-btn>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      containerCode: `<v-container>
  <v-btn>Testing Container</v-btn>
</v-container>`,
    };
  },
};
</script>
