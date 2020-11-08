<template>
  <section class="date-picker-component">
    <p class="no-upper-margin">
      Use a <kbd>v-text-area</kbd> to create customizable text areas for your form.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default text area is just a resizable box.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/TextArea/#!"
      component="v-text-area"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-text-area></v-text-area>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-text-area']" />

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
      props: [
        ['v-text-area', 'placeholder', 'string', 'empty', 'Set the placeholder of the textarea.'],
        ['v-text-area', 'disabled', 'boolean', 'false', 'Set the disabled state of the textarea.'],
      ],
    };
  },
};
</script>
