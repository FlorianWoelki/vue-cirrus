<template>
  <section class="dividers-component">
    <h5>Dividers</h5>
    <p>Easily split up your layout with dividers!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <p>Paragraph Text 1</p>
        <v-divider />
        <p>Paragraph Text 2</p>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data="props" />

    <v-space
      xlarge
      v-for="i in 2"
      :key="i"
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
      code: `<p>Paragraph Text 1</p>
<v-divider />
<p>Paragraph Text 2</p>`,
      props: {
        short: ['short', 'false', 'Boolean', 'Short divider'],
      },
    };
  },
};
</script>
