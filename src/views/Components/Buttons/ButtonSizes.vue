<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <span v-html="code"></span>
      </v-code>
    </v-col>
    <v-col c6>
      <v-row>
        <v-row center>
          <v-col
            center
            c6
          >
            <v-btn xsmall>Button</v-btn>
          </v-col>
          <v-col
            center
            c6
          >
            <v-btn small>Button</v-btn>
          </v-col>
        </v-row>
        <v-row center>
          <v-col
            center
            c6
          >
            <v-btn large>Button</v-btn>
          </v-col>
          <v-col
            center
            c6
          >
            <v-btn xlarge>Button</v-btn>
          </v-col>
        </v-row>
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
