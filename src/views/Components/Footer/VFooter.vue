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
        <v-footer style="margin-top: 0">
          <template #title>
            <h6 class="white uppercase">Title</h6>
          </template>
          <v-row>
            <v-col c="6">
              <v-footer-list>
                <v-footer-list-item title>About Us</v-footer-list-item>
                <v-footer-list-item href="#">Facebook</v-footer-list-item>
                <v-footer-list-item href="#">Instagram</v-footer-list-item>
                <v-footer-list-item href="#">WhatsApp</v-footer-list-item>
              </v-footer-list>
            </v-col>
            <v-col c="6">
              <v-footer-list>
                <v-footer-list-item title>Misc</v-footer-list-item>
                <v-footer-list-item href="#">Contact Us</v-footer-list-item>
                <v-footer-list-item href="#">What is this?</v-footer-list-item>
                <v-footer-list-item href="#">Can you help me?</v-footer-list-item>
              </v-footer-list>
            </v-col>
          </v-row>
          <template #subtitle>
            <p>Subtitle</p>
          </template>
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
      customCode: `<v-footer style="margin-top: 0">
  <template #title>
    <h6 class="white uppercase">Title</h6>
  </template>
  <v-row>
    <v-col c="6">
      <v-footer-list>
        <v-footer-list-item title>About Us</v-footer-list-item>
        <v-footer-list-item href="#">Facebook</v-footer-list-item>
        <v-footer-list-item href="#">Instagram</v-footer-list-item>
        <v-footer-list-item href="#">WhatsApp</v-footer-list-item>
      </v-footer-list>
    </v-col>
    <v-col c="6">
      <v-footer-list>
        <v-footer-list-item title>Misc</v-footer-list-item>
        <v-footer-list-item href="#">Contact Us</v-footer-list-item>
        <v-footer-list-item href="#">What is this?</v-footer-list-item>
        <v-footer-list-item href="#">Can you help me?</v-footer-list-item>
      </v-footer-list>
    </v-col>
  </v-row>
  <template #subtitle>
    <p>Subtitle</p>
  </template>
</v-footer>
`,
      props: [
        ['v-footer', 'fixed', 'boolean', 'false', 'Make the footer fixed on the bottom of the page.'],
        ['v-footer', 'title', 'slot', 'null', 'Set the title for the v-footer component.'],
        ['v-footer', 'subtitle', 'slot', 'null', 'Set the subtitle for the v-footer component.'],
        ['v-footer-list-item', 'title', 'boolean', 'false', 'Set the list item to a non clickable title.'],
      ],
    };
  },
};
</script>
