<template>
  <section class="badges">
    <h5>Footer</h5>
    <p>
      There are many styles for footers!
      More styles can be found <a href="https://spiderpig86.github.io/Cirrus/docs/footer/">here</a>
    </p>

    <v-row>
      <v-col c6>
        <v-code
          lang="Vue"
          style="margin-top: 125px;"
        >
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        center
        c6
      >
        <v-footer
          title="Company"
          subtitle="Awesome company footer"
        >
          <h1>Some awesome footerrish.</h1>
        </v-footer>
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
      code: `<xmp><v-footer title="Company" subtitle="Awesome company footer">
  <h1>Some awesome footerrish.</h1>
</v-footer></xmp>`,
      props: {
        fixed: ['fixed', 'false', 'Boolean', 'If footer is fixed on the bottom'],
        title: ['title', 'empty', 'String', 'Title for the footer'],
        subtitle: ['subtitle', 'empty', 'String', 'Subtitle for the footer'],
      },
    };
  },
};
</script>
