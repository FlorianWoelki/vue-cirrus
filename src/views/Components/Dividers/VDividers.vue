<template>
  <section class="badges">
    <h5>Dividers</h5>
    <p>Easily split up your layout with dividers!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 50px;"
      >
        <p>Paragraph Text 1</p>
        <v-divider />
        <p>Paragraph Text 2</p>
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
      code: `<xmp><p>Paragraph Text 1</p>
<v-divider />
<p>Paragraph Text 2</p></xmp>`,
      props: {
        short: ['short', 'false', 'Boolean', 'Short divider'],
      },
    };
  },
};
</script>
