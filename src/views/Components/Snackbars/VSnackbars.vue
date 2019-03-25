<template>
  <section class="snackbars">
    <h5>Creating Snackbars</h5>
    <p>Snackbars are a new invented thing in Vue Cirrus and it is not present in Cirrus.</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 25px;"
      >
        <v-row center style="margin-bottom: 25px;">
          <v-col c6>
            <input type="radio" v-model=position name="position" value="0" checked> Bottom Center
          </v-col>
          <v-col c6>
            <input type="radio" v-model=position name="position" value="1"> Bottom Left
          </v-col>
          <v-col c6>
            <input type="radio" v-model=position  name="position" value="2"> Bottom Right
          </v-col>
          <v-col c6>
            <input type="radio" v-model=position  name="position" value="3"> Top Left
          </v-col>
          <v-col c6>
            <input type="radio" v-model=position  name="position" value="4"> Top Center
          </v-col>
          <v-col c6>
            <input type="radio" v-model=position  name="position" value="5"> Top Right
          </v-col>
        </v-row>
        <v-row center>
          <v-btn :onClick="() => { snackbar = !snackbar; }">Show!</v-btn>
        </v-row>
        <!-- Sloppy solution.. TODO: Fix -->
        <v-snackbar
          v-if="position == 0"
          bottomCenter
          v-model="snackbar"
        >Awesome Snackbar!</v-snackbar>
        <v-snackbar
          v-if="position == 1"
          bottomLeft
          v-model="snackbar"
        >Awesome Snackbar!</v-snackbar>
        <v-snackbar
          v-if="position == 2"
          bottomRight
          v-model="snackbar"
        >Awesome Snackbar!</v-snackbar>
        <v-snackbar
          v-if="position == 3"
          topLeft
          v-model="snackbar"
        >Awesome Snackbar!</v-snackbar>
        <v-snackbar
          v-if="position == 4"
          topCenter
          v-model="snackbar"
        >Awesome Snackbar!</v-snackbar>
        <v-snackbar
          v-if="position == 5"
          topRight
          v-model="snackbar"
        >Awesome Snackbar!</v-snackbar>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space
      xlarge
      v-for="i in 2"
      :key=i
    />
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
      position: 0,
      snackbar: false,
      code: `<xmp><v-snackbar
  bottomCenter
  v-model="snackbar"
>
  Awesome Snackbar!
</v-snackbar>
</xmp>`,
      props: {
        accent: ['accent', 'false', 'Boolean', 'Accent fill color'],
        gray: ['gray', 'false', 'Boolean', 'Gray fill color'],
        black: ['black', 'false', 'Boolean', 'Black fill color'],
        value: ['v-model', 'false', 'Boolean', 'v-model for snackbar'],
        bottomLeft: ['bottomLeft', 'false', 'Boolean', 'Bottom Left position'],
        bottomRight: ['bottomRight', 'false', 'Boolean', 'Bottom Right position'],
        bottomCenter: ['bottomCenter', 'false', 'Boolean', 'Bottom Center position'],
        topLeft: ['topLeft', 'false', 'Boolean', 'Top Left position'],
        topRight: ['topRight', 'false', 'Boolean', 'Top Right position'],
        topCenter: ['topCenter', 'false', 'Boolean', 'Top Center position'],
      },
    };
  },
};
</script>
