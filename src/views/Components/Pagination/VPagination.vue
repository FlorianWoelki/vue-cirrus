<template>
  <section class="badges">
    <h5>Pagination</h5>
    <p>There is an easy pagination component in Vue-Cirrus.</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col center c6 style="margin-top: 150px;">
        <v-pagination>
          <v-pagination-item disabled>Prev</v-pagination-item>
          <v-pagination-item selected>1</v-pagination-item>
          <v-pagination-item>2</v-pagination-item>
          <v-pagination-item>Next</v-pagination-item>
        </v-pagination>
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
      code: `<xmp><v-pagination>
  <v-pagination-item disabled>Prev</v-pagination-item>
  <v-pagination-item selected>1</v-pagination-item>
  <v-pagination-item>2</v-pagination-item>
  <v-pagination-item>Next</v-pagination-item>
</v-pagination></xmp>`,
      props: {
        link: ['link', '#', 'String', 'PaginationItem href'],
        selected: ['selected', 'false', 'Boolean', 'PaginationItem is selected'],
        disabled: ['disabled', 'false', 'Boolean', 'PaginationItem is disabled'],
      },
    };
  },
};
</script>
