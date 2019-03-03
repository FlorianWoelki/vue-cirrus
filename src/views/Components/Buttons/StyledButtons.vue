<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <pre v-html="code"></pre>
      </v-code>
    </v-col>
    <v-col c6 style="margin-top: 150px;">
      <v-row>
        <v-col center c2>
          <v-btn btnStyle="accent">Button</v-btn>
        </v-col>
        <v-col center c2>
          <v-btn btnStyle="outline-inverted">Button</v-btn>
        </v-col>
        <v-col center c2>
          <v-btn btnStyle="transparent">Button</v-btn>
        </v-col>
        <v-col center c2>
          <v-btn btnStyle="light">Button</v-btn>
        </v-col>
        <v-col center c2>
          <v-btn btnStyle="dark">Button</v-btn>
        </v-col>
        <v-col center c2>
          <v-btn btnStyle="black">Button</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<xmp><v-btn btnStyle="accent">Button</v-btn>
<v-btn btnStyle="outline-inverted">Button</v-btn>
<v-btn btnStyle="transparent">Button</v-btn>
<v-btn btnStyle="light">Button</v-btn>
<v-btn btnStyle="dark">Button</v-btn>
<v-btn btnStyle="black">Button</v-btn></xmp>`,
    };
  },
};
</script>
