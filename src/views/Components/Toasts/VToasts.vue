<template>
  <section class="toasts-component">
    <h5>Creating Snackbars</h5>
    <p>Snackbars are a new invented thing in Vue Cirrus and it is not present in Cirrus.</p>

    <v-row level>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col center c6>
        <v-toast title="Awesome title!" closable disableCloseFunction>
          My Toast!
        </v-toast>
      </v-col>
    </v-row>

    <v-space xlarge />

    <h6>API (props)</h6>
    <API :data=props />

    <v-space xlarge v-for="i in 2" :key="i" />
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
      code: `<v-toast title="Awesome title!" closable disableCloseFunction>
  My Toast!
</v-toast>`,
      props: {
        disableCloseFunction: ['disableCloseFunction', 'false', 'Boolean', 'Disable the pre coded close function'],
        title: ['title', 'Empty', 'String', 'Title for the toast component'],
        success: ['success', 'false', 'Boolean', 'Success colored toast'],
        warning: ['warning', 'false', 'Boolean', 'Warning colored toast'],
        error: ['error', 'false', 'Boolean', 'Error colored toast'],
        info: ['info', 'false', 'Boolean', 'Info colored toast'],
        link: ['link', 'false', 'Boolean', 'Link colored toast'],
        primary: ['primary', 'false', 'Boolean', 'Primary colored toast'],
        closable: ['closable', 'false', 'Boolean', 'Closable icon in the top right'],
      },
    };
  },
};
</script>
