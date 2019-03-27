<template>
  <section class="nextprev-component">
    <h5>NextPrev</h5>
    <p>It is so easy to create stylus next and previous buttons!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        c6
      >
        <v-next-prev
          prevText="Prev Text"
          nextText="Next Text"
        />
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
      code: `<xmp><v-next-prev
  prevText="Prev Text"
  nextText="Next Text"
/></xmp>`,
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
