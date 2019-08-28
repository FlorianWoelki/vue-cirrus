<template>
  <v-row level>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col
      c6
    >
      <v-row>
        <v-col
          center
          c6
        >
          <v-btn loadingLeft>Loading Left Button</v-btn>
        </v-col>
        <v-col
          center
          c6
        >
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
      code: `<v-btn loadingLeft>Loading Left Button</v-btn>
<v-btn loadingRight>Loading Right Button</v-btn>`,
    };
  },
};
</script>
