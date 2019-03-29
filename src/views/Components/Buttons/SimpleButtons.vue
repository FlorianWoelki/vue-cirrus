<template>
  <v-row>
    <v-col c6>
      <v-code lang="Vue">
        <xmp v-html="code"></xmp>
      </v-code>
    </v-col>
    <v-col
      c6
      style="margin-top: 45px;"
    >
      <v-row>
        <v-col
          center
          c4
        >
          <v-btn>Normal Button</v-btn>
        </v-col>
        <v-col
          center
          c4
        >
          <v-btn animated>Animated Button</v-btn>
        </v-col>
        <v-col
          center
          c4
        >
          <v-btn :onClick="alertMe">Click Button</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      code: `<v-btn>Normal Button</v-btn>
<v-btn animated>Animated Button</v-btn>
<v-btn :onClick="alertMe">Click Button</v-btn>`,
    };
  },

  methods: {
    alertMe() {
      alert('You clicked on the button!'); // eslint-disable-line no-alert
    },
  },
};
</script>
