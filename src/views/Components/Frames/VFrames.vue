<template>
  <section class="frames-component">
    <h5>Frames</h5>
    <p>You can simply create basic layouts with frames!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 30px;"
      >
        <v-frame>
          <v-frame-header>
            <v-avatar text="FW"></v-avatar>
            <p class="text-center frame-title">Florian Woelki</p>
            <p class="text-center frame-subtitle">Youngest Thing on the earth</p>
            <v-tabs fill>
              <v-tab>Favorites</v-tab>
              <v-tab selected>Profile</v-tab>
              <v-tab>Pins</v-tab>
            </v-tabs>
          </v-frame-header>
          <v-frame-body>
            <p>Some Text Some Text Some Text Some Text</p>
            <p>Some Text Some Text Some Text Some Text</p>
            <p>Some Text Some Text Some Text Some Text</p>
            <p>Some Text Some Text Some Text Some Text</p>
          </v-frame-body>
          <v-frame-footer>
            <v-divider />
            <p>~ Something like a footer</p>
          </v-frame-footer>
        </v-frame>
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
      code: `<xmp><v-frame>
  <v-frame-header>
    <v-avatar text="FW"></v-avatar>
    <p class="text-center frame-title">Florian Woelki</p>
    <p class="text-center frame-subtitle">Youngest Thing on the earth</p>
    <v-tabs fill>
      <v-tab>Favorites</v-tab>
      <v-tab selected>Profile</v-tab>
      <v-tab>Pins</v-tab>
    </v-tabs>
  </v-frame-header>
  <v-frame-body>
    <p>Some Text Some Text Some Text Some Text</p>
    <p>Some Text Some Text Some Text Some Text</p>
    <p>Some Text Some Text Some Text Some Text</p>
    <p>Some Text Some Text Some Text Some Text</p>
  </v-frame-body>
  <v-frame-footer>
    <v-divider />
    <p>~ Something like a footer</p>
  </v-frame-footer>
</v-frame></xmp>`,
      props: {
        height: ['height', 'empty', 'String', 'Height of this frame (e.g. 30px)'],
      },
    };
  },
};
</script>
