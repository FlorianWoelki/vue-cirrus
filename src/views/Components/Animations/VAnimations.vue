<template>
  <section class="animations-mixin">
    <p>This mixin can almost applied to any Vue Cirrus component!</p>

    <p>Short Demo</p>

    <v-row>
      <v-col
        c4
        center
      >Fade In</v-col>
      <v-col
        c4
        center
      >Bounce In</v-col>
      <v-col
        c4
        center
        >Bounce</v-col>
    </v-row>
    <v-row>
      <v-col
        c4
        center
      >
        <v-btn
          fadeIn
          infinite
        >Btn</v-btn>
      </v-col>
      <v-col
        c4
        center
      >
        <v-btn
          bounceIn
          infinite
        >Btn</v-btn>
      </v-col>
      <v-col
        c4
        center
      >
        <v-btn
          bounce
          infinite
        >Btn</v-btn>
      </v-col>
    </v-row>

    <v-space xlarge />

    <v-row>
      <v-col
        c4
        center
      >Pulse</v-col>
      <v-col
        c4
        center
      >Hover Grow</v-col>
      <v-col
        c4
        center
      >Loading Left/Right</v-col>
    </v-row>
    <v-row>
      <v-col
        c4
        center
      >
        <v-btn
          pulse
          infinite
        >Btn</v-btn>
      </v-col>
      <v-col
        c4
        center
      >
        <v-btn
          hoverGrow
          infinite
        >Btn</v-btn>
      </v-col>
      <v-col
        c4
        center
      >
        <v-btn
          loadingLeft
          infinite
        >Btn</v-btn>
      </v-col>
    </v-row>

    <v-space xlarge />

    <v-row>
      <span>Code example</span>
      <v-code lang="Vue">
        <xmp v-html=code></xmp>
      </v-code>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />
  </section>
</template>

<script>
import API from '../API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: `<v-btn
  pulse
  infinite
>Btn</v-btn>`,
      props: {
        infinite: ['infinite', 'false', 'Boolean', 'Animation will be infinite'],
        fadeIn: ['fadeIn', 'false', 'Boolean', 'Enable fade in animation'],
        bounceIn: ['bounceIn', 'false', 'Boolean', 'Enable bounce in animation'],
        bounce: ['bounce', 'false', 'Boolean', 'Enable bounce animation'],
        pulse: ['pulse', 'false', 'Boolean', 'Enable pulse animation'],
        hoverGrow: ['hoverGrow', 'false', 'Boolean', 'Enable hover grow animation'],
        loadingLeft: ['loadingLeft', 'false', 'Boolean', 'Enable loading left animation'],
        loadingRight: ['loadingRight', 'false', 'Boolean', 'Enable loading right animation'],
      },
    };
  },
};
</script>
