<template>
  <section class="badges">
    <h5>Easy Code components</h5>
    <p>You can create easily colored code preview components!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col c4 o1>
        <v-code lang="JavaScript">
          <pre v-html="javascriptCode"></pre>
        </v-code>
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
      code: `<xmp><v-fullscreen link="image.png">
  <h1>Hello World</h1>
</v-fullscreen></xmp>`,
      javascriptCode: `<xmp>const myBool = true;
if (myBool) {
  console.log("Bool is true!");
}</xmp>`,
      props: {
        lang: ['lang', 'empty', 'String', 'Language for this code segment'],
        keywords: ['keywords', 'empty', 'String', 'Keywords for this code segment that gets colored (Not working yet!)'],
        copyable: ['copyable', 'false', 'Boolean', 'If code segment is copyable'],
      },
    };
  },
};
</script>
