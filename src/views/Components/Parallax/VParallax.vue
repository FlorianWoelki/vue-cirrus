<template>
  <section class="badges">
    <h5>Parallax</h5>
    <p>
      You do not need to code anything with CSS!
      This component is for parallax images so easy to use!
    </p>

    <v-row>
      <v-col c6>
        <v-code
          lang="Vue"
          style="margin-top: 100px;"
        >
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <v-parallax
          src="https://paulmason.name/media/demos/full-screen-background-image/background.jpg"
          style="height: 500px;"
        >
          <h1>Hello World</h1>
        </v-parallax>
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
      code: `<xmp><v-parallax src="background.jpg" style="height: 500px;">
  <h1>Hello World</h1>
</v-parallax></xmp>`,
      props: {
        splashId: ['splashId', 'splash-id', 'String', 'Id for the splash image'],
        src: ['src', 'empty', 'String', 'href for the image'],
      },
    };
  },
};
</script>
