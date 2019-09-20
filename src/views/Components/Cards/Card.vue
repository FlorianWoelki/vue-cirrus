<template>
  <v-row level>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col center c6>
      <v-card>
        <v-card-title>Title</v-card-title>
        <v-card-content>
          <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
        </v-card-content>
        <v-card-footer>Footer text</v-card-footer>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-card>
  <v-card-title>Title</v-card-title>
  <v-card-content>
    <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
  </v-card-content>
  <v-card-footer>Footer text</v-card-footer>
</v-card>`,
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
