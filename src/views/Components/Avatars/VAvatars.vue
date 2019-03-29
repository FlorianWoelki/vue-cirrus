<template>
  <section class="avatars-component">
    <h5>Easy Avatars</h5>
    <p>Easily create avatars with Vue-Cirrus! It is so simple!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 30px;"
      >
        <v-avatar text="FW"></v-avatar>
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
      code: '<v-avatar text="FW"></v-avatar>',
      props: {
        src: ['src', 'Empty', 'String', 'Avatar image source'],
        text: ['text', 'Empty', 'String', 'Avatar text'],
        padded: ['padded', 'false', 'Boolean', 'Enable padding around avatar'],
        xsmall: ['xsmall', 'false', 'Boolean', 'Avatar xsmall size'],
        small: ['small', 'false', 'Boolean', 'Avatar small size'],
        large: ['large', 'false', 'Boolean', 'Avatar large size'],
        xlarge: ['xlarge', 'false', 'Boolean', 'Avatar xlarge size'],
      },
    };
  },
};
</script>
