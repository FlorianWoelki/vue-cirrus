<template>
  <section class="grid-component">
    <p class="no-upper-margin">
      This component represents the beauty of the default CSS grid system.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Simply use the <kbd>v-grid</kbd> component for creating a grid.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Grid/#!"
      component="v-grid"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <v-grid gap="6" cols="3">
          <p>Grid Column 1</p>
          <p>Grid Column 2</p>
          <p>Grid Column 3</p>
        </v-grid>
      </template>
    </Playground>
    <v-space xlarge />

    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-grid']" />
  </section>
</template>

<script>
import API from '@/views/Components/API.vue';
import Playground from '@/components/Playground/Playground.vue';

export default {
  components: {
    API,
    Playground,
  },

  data() {
    return {
      propsData: {
        fluid: false,
        column: null,
        dynamicOffset: null,
      },
      props: [
        ['v-grid', 'cols', 'string', 'null', 'Define the columns for the grid.'],
        ['v-grid', 'gap', 'string', 'null', 'Define the grid for the grid layout.'],
      ],
    };
  },
};
</script>
