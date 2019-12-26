<template>
  <section class="toggler-component">
    <p class="no-upper-margin">
      Create a beautiful toggler component by using the <kbd>v-toggler</kbd> component.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      The default toggler component has a active an inactive state.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Toggler/#!"
      component="v-toggler"
      :customCode="customCode"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-toggler
          class="u-center"
        ></v-toggler>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-toggler']" />

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
      propsData: {
      },
      props: [
        ['v-toggler', 'dataCheckIcon', 'string', 'empty', 'Set the icon, whenever the toggler is checked.'],
        ['v-toggler', 'dataUncheckIcon', 'string', 'empty', 'Set the icon, whenever the toggler is unchecked.'],
        ['v-toggler', 'name', 'string', 'toggleCheckbox', 'Set the name of the toggler component.'],
        ['v-toggler', 'disabled', 'boolean', 'false', 'Set the disabled state of the toggler.'],
        ['v-toggler', 'checked', 'boolean', 'false', 'Set the checked state of the toggler.'],
        ['v-toggler', 'success', 'boolean', 'false', 'Set the success state of the toggler.'],
        ['v-toggler', 'error', 'boolean', 'false', 'Set the error state of the toggler.'],
        ['v-toggler', '@change', 'functio', '() => {}', 'Catch the event of the toggler change.'],
      ],
    };
  },

  computed: {
    customCode() {
      return '<v-toggler></v-toggler>';
    },
  },
};
</script>
