<template>
  <section class="snackbars">
    <h5>Creating Snackbars</h5>
    <p>Snackbars are a new invented thing in Vue Cirrus and it is not present in Cirrus.</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col center c6 style="margin-top: 100px;">
        <v-btn :onClick="() => { snackbar = !snackbar; }">Show!</v-btn>
        <v-snackbar bottomCenter v-model="snackbar">Awesome Snackbar!</v-snackbar>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API />

    <v-space xlarge v-for="i in 2" :key=i />
  </section>
</template>

<script>
import API from '@/views/Components/Snackbars/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      snackbar: false,
      code: `<xmp><v-snackbar bottomCenter v-model="snackbar">
  Awesome Snackbar!
</v-snackbar>
</xmp>`,
    };
  },
};
</script>
