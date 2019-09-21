<template>
  <section class="badges-component">
    <h5>Custom badges</h5>
    <p>The badges functionality is a Vue Cirrus original and it is so easy to create one!</p>

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
        <v-badge accent content="3">
          <p>Paragraph Text</p>
        </v-badge>
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
      code: `<v-badge accent content="3">
  <p>Paragraph Text</p>
</v-badge>`,
      props: {
        content: ['content', 'Empty', 'String', 'Badge Text'],
        left: ['left', 'false', 'Boolean', 'Left positioned badge'],
        right: ['right', 'true', 'Boolean', 'Right positioned badge'],
        bottom: ['bottom', 'false', 'Boolean', 'Bottom positioned badge'],
        primary: ['primary', 'false', 'Boolean', 'Primary colored badge'],
        info: ['info', 'false', 'Boolean', 'Info colored badge'],
        link: ['link', 'false', 'Boolean', 'Link colored badge'],
        dark: ['dark', 'false', 'Boolean', 'Dark colored badge'],
        success: ['success', 'false', 'Boolean', 'Success colored badge'],
        black: ['black', 'false', 'Boolean', 'Black colored badge'],
        warning: ['warning', 'false', 'Boolean', 'Warning colored badge'],
        danger: ['danger', 'false', 'Boolean', 'Danger colored badge'],
        light: ['light', 'false', 'Boolean', 'Light colored badge'],
      },
    };
  },
};
</script>
