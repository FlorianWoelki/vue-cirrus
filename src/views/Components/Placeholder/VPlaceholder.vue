<template>
  <section class="placeholder-component">
    <h5>Easy Placeholders</h5>
    <p>You can create placeholders for easy prototyping.</p>

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
        <v-placeholder />
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
      code: '<v-placeholder />',
      props: {
        title: ['title', 'Coming Soon', 'String', 'Title for placeholder'],
        subtitle: ['subtitle', 'We are currently working on this segment! :)', 'String', 'Subtitle for placeholder'],
      },
    };
  },
};
</script>
