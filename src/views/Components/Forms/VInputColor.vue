<template>
  <section class="date-picker-component">
    <p class="no-upper-margin">
      Use a custom input color form to let the user select the color he wants.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default input color form has the default color black (#000) as a input.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/InputColor/#!"
      component="v-input-color"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-input-color></v-input-color>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-input-color']" />

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
        ['v-input-color', 'defaultValue', 'string', '#000', 'Set the default color of the input color picker.'],
      ],
    };
  },
};
</script>
