<template>
  <section class="grid-component">
    <p class="no-upper-margin">
      There are so many possible ways to use the <kbd>grid</kbd> functionality in
      Vue Cirrus. Furthermore, it is so easy to use.
    </p>

    <v-space xlarge />

    <h3>Usage</h3>
    <p class="no-upper-margin">
      Columns in their simplest form are just fluid.
    </p>

    <v-space />
    <Playground
      noTitle
      href="/#/components/Grid/#!"
      component="v-grid"
      :componentProps="propsData"
    >
      <template v-slot:component>
        <div class="grid-playground">
          <v-row>
            <v-col>Column</v-col>
            <v-col>Column</v-col>
            <v-col>Column</v-col>
            <v-col>Column</v-col>
          </v-row>
        </div>
      </template>
    </Playground>

    <v-space xlarge />
    <h3 style="margin-bottom: 10px">API</h3>
    <API :data="props" :dropdownItems="['v-col', 'v-row']" />

    <v-space xlarge />
    <v-space xlarge />
    <h3>Examples</h3>
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
        bordered: false,
        xlarge: false,
      },
      props: [
        ['v-col', 'c', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'o', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'w', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'h', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'dynamicOffset', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'fluid', 'boolean', 'false', 'Align the columns with equal amount of space.'],
        ['v-row', 'level', 'boolean', 'false', 'Position the columns on one level.'],
      ],
    };
  },
};
</script>

<style lang="scss">
.grid-component {
  .grid-playground {
    .row {
      background-color: #2C3E50;
    }
    .offset-center {
      background-color: #95A5A6;
      border-radius: 5px;
      padding: 10px;
    }
  }
}
</style>
