<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <pre v-html="code"></pre>
      </v-code>
    </v-col>
    <v-col c6 style="margin-top: 90px;">
      <v-row>
        <v-col center c3>
          <v-btn xsmall>Button</v-btn>
        </v-col>
        <v-col center c3>
          <v-btn small>Button</v-btn>
        </v-col>
        <v-col center c3>
          <v-btn large>Button</v-btn>
        </v-col>
        <v-col center c3>
          <v-btn xlarge>Button</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<xmp><v-btn xsmall>Button</v-btn>
<v-btn small>Button</v-btn>
<v-btn large>Button</v-btn>
<v-btn xlarge>Button</v-btn></xmp>`,
    };
  },
};
</script>
