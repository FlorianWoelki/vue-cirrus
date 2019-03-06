<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <pre v-html="code"></pre>
      </v-code>
    </v-col>
    <v-col center c6 style="margin-top: 25px;">
      <v-min-card title="Google Chrome" imgId="image">
        <p>Here is some basic card text for the minimized card</p>
      </v-min-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<xmp><v-min-card title="Google Chrome" imgId="image">
  <p>Here is some basic card text for the minimized card</p>
</v-min-card></xmp>`,
    };
  },
};
</script>

<style>
#image {
  width: 50px;
  height: 50px;
}
</style>
