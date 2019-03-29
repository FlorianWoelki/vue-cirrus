<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col
      center
      c6
    >
      <v-min-card
        title="Google Chrome"
        imgId="image"
      >
        <p>Here is some basic card text for the minimized card</p>
      </v-min-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-min-card
  title="Google Chrome"
  imgId="image"
>
  <p>Here is some basic card text for the minimized card</p>
</v-min-card>`,
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
