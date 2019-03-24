<template>
  <section class="badges">
    <h5>Modals</h5>
    <p>It is so easy to create modals with Vue-Cirrus</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        center
        c6
        style="margin-top: 130px;"
      >
        <a href="#modal">
          <v-btn btnStyle="accent">Open Modal</v-btn>
        </a>
        <v-modal
          large
          zoomOut
        >
          <v-modal-body>
            <h6>Hello Modal Dialog</h6>
          </v-modal-body>
          <v-modal-footer style="padding-bottom: 80px;">
            <v-btn pullLeft>Close</v-btn>
            <v-btn
              pullRight
              btnStyle="accent"
            >Share</v-btn>
          </v-modal-footer>
        </v-modal>
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
      code: `<xmp><a href="#modal">
  <v-btn btnStyle="accent">Open Modal</v-btn>
</a>
<v-modal large zoomOut>
  <v-modal-body>
    <h6>Hello Modal Dialog</h6>
  </v-modal-body>
  <v-modal-footer style="padding-bottom: 80px;">
    <v-btn pullLeft>Close</v-btn>
    <v-btn pullRight btnStyle="accent">Share</v-btn>
  </v-modal-footer>
</v-modal></xmp>`,
      props: {
        title: ['title', 'Modal Dialog', 'String', 'Modal title'],
        closeTarget: ['closeTarget', '#target', 'String', 'Close target in url'],
        mId: ['mId', 'modal', 'String', 'Modal Id'],
        small: ['small', 'false', 'Boolean', 'Small Modal size'],
        large: ['large', 'false', 'Boolean', 'Large Modal size'],
        zoomIn: ['zoomIn', 'false', 'Boolean', 'Modal zoomIn animation'],
        zoomOut: ['zoomOut', 'false', 'Boolean', 'Modal zoomOut animation'],
        dropdown: ['dropdown', 'false', 'Boolean', 'Dropdown Modal'],
      },
    };
  },
};
</script>
