<template>
  <section class="grid-component">
    <h5>Grid</h5>
    <p>The layout is really simple. There are different types of layouts in Cirrus.</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 80px;"
      >
        <v-row>
          <v-col c4>Column 1</v-col>
          <v-col c4>Column 2</v-col>
          <v-col c4>Column 3</v-col>
        </v-row>
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
      code: `<v-row>
  <v-col c4>Column 1</v-col>
  <v-col c4>Column 2</v-col>
  <v-col c4>Column 3</v-col>
</v-row>`,
      props: {
        fluid: ['fluid', 'false', 'Boolean', '(Row) Fluid container'],
        wrap: ['wrap', 'false', 'Boolean', '(Row) Wrap container'],
        c1c12: ['c1-c12', 'false', 'Boolean', '(Col) Columns from c1 to c12'],
        o1o12: ['o1-o12', 'false', 'Boolean', '(Col) Columns offset from o1 to o12'],
        noSpace: ['noSpace', 'false', 'Boolean', '(Col) No space between columns'],
        ignoreScreen: ['ignoreScreen', 'false', 'Boolean', '(Col) Columns ignore screen size'],
        oCenter: ['oCenter', 'false', 'Boolean', '(Col) Columns offset center'],
        oLeft: ['oLeft', 'false', 'Boolean', '(Col) Columns offset left'],
        oRight: ['oRight', 'false', 'Boolean', '(Col) Columns offset right'],
        w10w100: ['w10-w100', 'false', 'Boolean', '(Col) Columns 10 grid from w10 to w100'],
      },
    };
  },
};
</script>
