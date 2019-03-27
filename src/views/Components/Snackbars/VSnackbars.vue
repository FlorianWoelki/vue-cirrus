<template>
  <section class="snackbars-component">
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
          <v-col
            c6
            v-for="(p, index) in positions"
            :key=p
          >
            <input
              type="radio"
              v-model=position name="position"
              :value=index
              :checked="index == 0"
            > {{p}}
          </v-col>
        </v-row>
        <v-row>
          <v-btn :onClick="() => { snackbar = !snackbar; }">Show!</v-btn>
        </v-row>
        <div
          v-for="i in 5"
          :key=i
        >
          <v-snackbar
            v-if="i-1 == position"
            :bottomCenter="i-1 == 0"
            :bottomLeft="i-1 == 1"
            :bottomRight="i-1 == 2"
            :topLeft="i-1 == 3"
            :topCenter="i-1 == 4"
            :topRight="i-1 == 5"
            v-model="snackbar"
          >Awesome Snackbar!</v-snackbar>
        </div>
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
      positions: [
        'Bottom Center',
        'Bottom Left',
        'Bottom Right',
        'Top Left',
        'Top Center',
        'Top Right',
      ],
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
