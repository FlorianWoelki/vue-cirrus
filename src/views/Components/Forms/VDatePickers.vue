<template>
  <section class="date-pickers">
    <h5>Date Picker</h5>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 30px;"
      >
        <v-container>
          <v-date-picker></v-date-picker>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      code: '<v-date-picker></v-date-picker>',
    };
  },
};
</script>
