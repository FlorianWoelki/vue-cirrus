<template>
  <section class="badges">
    <h5>Fullscreen</h5>
    <p>With this component you can easily create fullscreens on your page!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 125px;"
      >
        <v-link>Preview is available on Home view.</v-link>
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
      code: `<xmp><v-fullscreen link="image.png">
  <h1>Hello World</h1>
</v-fullscreen></xmp>`,
      props: {
        link: ['link', 'empty', 'String', 'href for the image'],
      },
    };
  },
};
</script>
