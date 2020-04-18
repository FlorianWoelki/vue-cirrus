<template>
  <section class="checkbox-component">
    <p class="no-upper-margin">
      You can create multiple <kbd>v-radio-button</kbd>s to let the user choose what
      option he will use.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default radio button is a unselected circle with a custom label.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/RadioBtn/#!"
      component="v-radio-btn"
      :componentProps="propsData"
      :customCode="customCode"
    >
      <template v-slot:component>
        <div class="u-center">
          <v-radio-btn success id="male-option">Male</v-radio-btn>
          <v-radio-btn id="female-option">Female</v-radio-btn>
        </div>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-radio-btn']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
  </section>
</template>

<script>
import API from '../API.vue';
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {},
      props: [
        ['v-radio-btn', 'id', 'string', 'my-radio-btn', 'You need to set the id, if you want to have more radio buttons.'],
        ['v-radio-btn', 'name', 'string', 'radio-btn', 'Set the name for the label.'],
        ['v-radio-btn', 'disabled', 'boolean', 'false', 'Set the disabled state of the radio button.'],
        ['v-radio-btn', 'checked', 'boolean', 'false', 'Set the checked state of the radio button.'],
        ['v-radio-btn', 'error', 'boolean', 'false', 'When the radio button will be selected, the text and radio button color will be red.'],
        ['v-radio-btn', 'success', 'boolean', 'false', 'When the radio button will be selected, the text and radio button color will be green.'],
      ],
    };
  },

  computed: {
    customCode() {
      return `
<v-radio-btn succcess id="male-option">Male</v-radio-btn>
<v-radio-btn id="female-option">Female</v-radio-btn>`;
    },
  },
};
</script>
