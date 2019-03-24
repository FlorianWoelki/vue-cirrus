<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <span v-html="code"></span>
      </v-code>
    </v-col>
    <v-col
      c6
      style="margin-top: 30px;"
    >
      <v-row>
        <v-row center>
          <v-col
            center
            c3
          >
            <v-btn accent>Button</v-btn>
          </v-col>
          <v-col
            center
            c3
          >
            <v-btn outlineInverted>Button</v-btn>
          </v-col>
          <v-col
            center
            c3
          >
            <v-btn transparent>Button</v-btn>
          </v-col>
        </v-row>
        <v-row center>
          <v-col
            center
            c3
          >
            <v-btn light>Button</v-btn>
          </v-col>
          <v-col
            center
            c3
          >
            <v-btn dark>Button</v-btn>
          </v-col>
          <v-col
            center
            c3
          >
            <v-btn black>Button</v-btn>
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
      code: `<xmp><v-btn accent>Button</v-btn>
<v-btn outlineInverted>Button</v-btn>
<v-btn transparent>Button</v-btn>
<v-btn light>Button</v-btn>
<v-btn dark>Button</v-btn>
<v-btn black>Button</v-btn></xmp>`,
    };
  },
};
</script>
