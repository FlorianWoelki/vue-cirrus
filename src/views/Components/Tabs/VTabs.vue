<template>
  <section class="tabs-component">
    <h5>Tabs</h5>
    <p>So easy to create Tabs in Vue Cirrus!</p>

    <v-row>
      <v-col c6>
        <v-code lang="Vue">
          <span v-html="code"></span>
        </v-code>
      </v-col>
      <v-col
        c6
        style="margin-top: 25px;"
      >
        <v-tabs fill>
          <v-tab>Tab One</v-tab>
          <v-tab selected>Tab Two</v-tab>
          <v-tab>Tab Three</v-tab>
        </v-tabs>
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
      code: `<xmp><v-tabs fill>
  <v-tab>Tab One</v-tab>
  <v-tab selected>Tab Two</v-tab>
  <v-tab>Tab Three</v-tab>
</v-tabs></xmp>`,
      props: {
        xsmall: ['xsmall', 'false', 'Boolean', 'XSmall tab size'],
        small: ['small', 'false', 'Boolean', 'Small tab size'],
        large: ['large', 'false', 'Boolean', 'Large tab size'],
        xlarge: ['xlarge', 'false', 'Boolean', 'XLarge tab size'],
        center: ['center', 'false', 'Boolean', 'Center the tabs'],
        right: ['right', 'false', 'Boolean', 'Right align the tabs'],
        fill: ['fill', 'false', 'Boolean', 'Fill the tabs full width'],
        depth: ['depth', 'false', 'Boolean', 'Create depth with the tabs'],
        classic: ['classic', 'false', 'Boolean', 'Create classic tabs'],
        selected: ['selected', 'false', 'Boolean', '(TabItem) Tab is selected'],
        link: ['link', 'false', 'Boolean', '(TabItem) Link of the tab item'],
      },
    };
  },
};
</script>
