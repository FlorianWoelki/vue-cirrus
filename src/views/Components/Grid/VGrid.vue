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
      :customCode="customCode"
    >
      <template v-slot:component>
        <div class="grid-playground">
          <v-row>
            <v-col fluid v-for="i in amountOfColumns" :key="i">
              Column
            </v-col>
          </v-row>
        </div>
      </template>
    </Playground>
    <v-row>
      <v-col c12>
        <v-btn-group>
          <v-btn color="success" @click="addColumn()">
            <i class="fas fa-plus"></i>
          </v-btn>
          <v-btn color="danger" @click="removeColumn()">
            <i class="fas fa-minus"></i>
          </v-btn>
        </v-btn-group>
      </v-col>
    </v-row>

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

  methods: {
    addColumn() {
      if (this.amountOfColumns < 11) {
        this.amountOfColumns += 1;
      }
    },
    removeColumn() {
      if (this.amountOfColumns > 1) {
        this.amountOfColumns -= 1;
      }
    },
  },

  computed: {
    customCode() {
      let result = '\n<v-row>\n';
      for (let i = 0; i < this.amountOfColumns; i += 1) {
        result += '  <v-col fluid>Column</v-col>\n';
      }
      return `${result}</v-row>`;
    },
  },

  data() {
    return {
      amountOfColumns: 3,
      propsData: {
      },
      props: [
        ['v-col', 'c', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'o', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'w', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'h', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'dynamicOffset', 'string', 'null', 'Set the column width (12 grid).'],
        ['v-col', 'fluid', 'boolean', 'false', 'Align the columns with equal amount of space.'],
        ['v-col', 'ignoreScreen', 'boolean', 'false', 'Columns will ignore the screen width.'],
        ['v-row', 'level', 'boolean', 'false', 'Position the columns on one level.'],
        ['v-row', 'noWrap', 'boolean', 'false', 'The given columns will not wrap to the next line.'],
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
