<template>
  <v-row>
    <v-col c6>
      <v-code
        lang="Vue"
        style="margin-top: 50px;"
      >
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col
      center
      c6
    >
      <v-card
        animated
        title="Title"
        subtitle="Subtitle"
        footerText="Footer text"
      >
        <v-card-content>
          <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
        </v-card-content>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-card
  animated
  title="Title"
  subtitle="Subtitle"
  footerText="Footer text"
>
  <v-card-content>
    <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
  </v-card-content>
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
