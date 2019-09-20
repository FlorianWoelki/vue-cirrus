<template>
  <v-row level>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col c6 center>
      <v-card animated>
        <v-card-image
          image="background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);"
          height="220px"
        >
          <v-card-title>Title</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>
        </v-card-image>

        <v-card-content>
          <p>This is some basic simple card text with some really cool animated cards stuff</p>
        </v-card-content>

        <v-card-footer>6:32 PM - 3 Jul 19</v-card-footer>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-card animated>
  <v-card-image
    image="background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);"
    height="220px"
  >
    <v-card-title>Title</v-card-title>
    <v-card-subtitle>Subtitle</v-card-subtitle>
  </v-card-image>

  <v-card-content>
    <p>This is some basic simple card text with some really cool animated cards stuff</p>
  </v-card-content>

  <v-card-footer>6:32 PM - 3 Jul 19</v-card-footer>
</v-card>`,
    };
  },
};
</script>
