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
      <v-col c6 style="margin-top: 50px;">
        <v-next-prev prevText="Prev Text" nextText="Next Text" />
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
      code: '<xmp><v-next-prev prevText="Prev Text" nextText="Next Text" /></xmp>',
      props: {
        onlyNext: ['onlyNext', 'false', 'Boolean', 'Only next is shown'],
        onlyPrev: ['onlyPrev', 'false', 'Boolean', 'Only previous is shown'],
        nextText: ['nextText', 'Next', 'String', 'Next text'],
        prevText: ['prevText', 'Previous', 'String', 'Previous text'],
      },
    };
  },
};
</script>
