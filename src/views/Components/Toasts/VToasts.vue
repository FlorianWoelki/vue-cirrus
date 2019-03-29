<template>
  <section class="toasts-component">
    <h5>Creating Snackbars</h5>
    <p>Snackbars are a new invented thing in Vue Cirrus and it is not present in Cirrus.</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <xmp v-html="code"></xmp>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 15px;"
      >
        <v-toast>My Toast!</v-toast>
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
      code: '<v-toast>My Toast!</v-toast>',
      props: {
        success: ['success', 'false', 'Boolean', 'Success colored toast'],
        warning: ['warning', 'false', 'Boolean', 'Warning colored toast'],
        error: ['error', 'false', 'Boolean', 'Error colored toast'],
        closable: ['closable', 'false', 'Boolean', 'Closable icon in the top right'],
      },
    };
  },
};
</script>
