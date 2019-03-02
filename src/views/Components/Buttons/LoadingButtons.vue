<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue" keywords="keyword">
        <pre v-html="code"></pre>
      </v-code>
    </v-col>
    <v-col c6 style="margin-top: 90px;">
      <v-row>
        <v-col center c6>
          <v-btn loadingLeft>Loading Left Button</v-btn>
        </v-col>
        <v-col center c6>
          <v-btn loadingRight>Loading Right Button</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<xmp><v-btn loadingLeft>Loading Left Button</v-btn>
<v-btn loadingRight>Loading Right Button</v-btn></xmp>`,
    };
  },
};
</script>
