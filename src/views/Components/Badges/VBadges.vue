<template>
  <section class="badges">
    <h5>Custom badges</h5>
    <p>The badges functionality is a Vue-Cirrus original and it is so easy to create one!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 50px;"
      >
        <v-badge content="3">
          <p>Paragraph Text</p>
        </v-badge>
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
      code: `<xmp><v-badge content="3">
  <p>Paragraph Text</p>
</v-badge></xmp>`,
      props: {
        content: ['content', 'Empty', 'String', 'Badge Text'],
        left: ['left', 'false', 'Boolean', 'Left positioned badge'],
        right: ['right', 'true', 'Boolean', 'Right positioned badge'],
        accent: ['accent', 'false', 'Boolean', 'Accent colored badge'],
        lightgray: ['lightgray', 'false', 'Boolean', 'Lightgray colored badge'],
        darkgray: ['darkgray', 'false', 'Boolean', 'Darkgray colored badge'],
        black: ['black', 'false', 'Boolean', 'Black colored badge'],
      },
    };
  },
};
</script>
