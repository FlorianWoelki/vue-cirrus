<template>
  <section class="avatars">
    <h5>Easy Avatars</h5>
    <p>Easily create avatars with Vue-Cirrus! It is so simple!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <pre v-html="code"></pre>
        </v-code>
      </v-col>
      <v-col center c6 style="margin-top: 100px;">
        <v-avatar text="FW"></v-avatar>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API />

    <v-space xlarge v-for="i in 2" :key=i />
  </section>
</template>

<script>
import API from '@/views/Components/Avatars/API.vue';

export default {
  components: {
    API,
  },

  data() {
    return {
      code: '<xmp><v-avatar text="FW"></v-avatar></xmp>',
    };
  },
};
</script>
