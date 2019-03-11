<template>
  <section class="badges">
    <h5>Spinners for loading</h5>
    <p>Easily create spinners for a loading effect!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col c6 style="margin-top: 25px;">
        <p>Spinner effect</p>
        <v-spinner />
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space xlarge v-for="i in 2" :key=i />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: `<xmp><v-tabs fill>
  <v-tab>Tab One</v-tab>
  <v-tab selected>Tab Two</v-tab>
  <v-tab>Tab Three</v-tab>
</v-tabs></xmp>`,
      props: {
        fadeOut: ['fadeOut', '40', 'Number', 'How long the fade out effect is'],
        delay: ['delay', '1000', 'Number', 'How long the delay is, when it will fade out'],
        backgroundColor: ['backgroundColor', 'false', 'Boolean', 'Background color of the spinner'],
        fillColor: ['fillColor', 'false', 'Boolean', 'Fill color of the spinner'],
      },
    };
  },
};
</script>
