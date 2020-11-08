<template>
  <section class="footer-component">
    <p class="no-upper-margin">
      You can use the <kbd>v-footer</kbd> component to create simple but really
      beautiful footer for your page.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Default dividers are horizontal and long.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Footer/#!"
      component="v-footer"
      :customCode="customCode"
      :componentProps="propsData"
      disableMessage
    >
      <template v-slot:component>
        <v-footer style="margin-top: 0" title="v-footer" subtitle="Awesome footer component">
          <v-row>
            <v-col c="6">
              <v-footer-list>
                <v-footer-list-item title>About Us</v-footer-list-item>
                <v-footer-list-item>Facebook</v-footer-list-item>
                <v-footer-list-item>Instagram</v-footer-list-item>
                <v-footer-list-item>WhatsApp</v-footer-list-item>
              </v-footer-list>
            </v-col>
            <v-col c="6">
              <v-footer-list>
                <v-footer-list-item title>Misc</v-footer-list-item>
                <v-footer-list-item>Contact Us</v-footer-list-item>
                <v-footer-list-item>What is this?</v-footer-list-item>
                <v-footer-list-item>Can you help me?</v-footer-list-item>
              </v-footer-list>
            </v-col>
          </v-row>
        </v-footer>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-footer', 'v-footer-list-item']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import Playground from '@/components/Playground/Playground.vue';
import API from '../API.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {},
      customCode: `
<v-footer style="margin-top: 0" title="v-footer" subtitle="Awesome footer component">
  <v-row>
    <v-col c="6">
      <v-footer-list>
        <v-footer-list-item title>About Us</v-footer-list-item>
        <v-footer-list-item>Facebook</v-footer-list-item>
        <v-footer-list-item>Instagram</v-footer-list-item>
        <v-footer-list-item>WhatsApp</v-footer-list-item>
      </v-footer-list>
    </v-col>
    <v-col c="6">
      <v-footer-list>
        <v-footer-list-item title>Misc</v-footer-list-item>
        <v-footer-list-item>Contact Us</v-footer-list-item>
        <v-footer-list-item>What is this?</v-footer-list-item>
        <v-footer-list-item>Can you help me?</v-footer-list-item>
      </v-footer-list>
    </v-col>
  </v-row>
</v-footer>
`,
      props: [
        ['v-footer', 'fixed', 'boolean', 'false', 'Make the footer fixed on the bottom of the page.'],
        ['v-footer', 'title', 'string', 'empty', 'Set the title for the v-footer component.'],
        ['v-footer', 'subtitle', 'string', 'empty', 'Set the subtitle for the v-footer component.'],
        ['v-footer-list-item', 'title', 'boolean', 'false', 'Set the list item to a non clickable title.'],
        ['v-footer-list-item', 'href', 'string', '#', 'Set the href for footer item, if it is no title.'],
        ['v-footer-list-item', 'blank', 'boolean', 'false', 'When set to true, the link of the item will open in a new tab.'],
      ],
    };
  },
};
</script>
