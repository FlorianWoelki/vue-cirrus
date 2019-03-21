<template>
  <section class="playground">
    <v-space large />
    <v-container>
      <h3>Playground</h3>
      <v-divider short />

      <v-row class="hide-on-mobile">
        <v-col c6>
          <InputField />
        </v-col>
        <v-col c6>
          <OutputField />
        </v-col>
      </v-row>

      <v-row center class="show-on-mobile">
        <p>There is no playground support for smaller screens!</p>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import OutputField from '@/components/playground/OutputField.vue';
import InputField from '@/components/playground/InputField.vue';

export default {
  components: {
    OutputField,
    InputField,
  },
};
</script>

<style scoped>
.show-on-mobile {
  visibility: hidden;
}

@media screen and (max-width: 600px) {
  .hide-on-mobile {
    visibility: hidden;
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none;
  }

  .show-on-mobile {
    visibility: visible;
  }
}
</style>
